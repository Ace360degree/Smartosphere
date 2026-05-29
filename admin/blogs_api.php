<?php
// admin/blogs_api.php
// JSON API endpoint for the React front-end to fetch WordPress blog posts

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// Connect directly to the WordPress database (smartosphere_blogs)
// This is separate from the admin config.php which points to the smartosphere DB
function getWpPdo() {
    static $pdo = null;
    if ($pdo === null) {
        $dsn = 'mysql:host=127.0.0.1;port=3306;dbname=smartosphere_blogs;charset=utf8mb4';
        $pdo = new PDO($dsn, 'root', '', [
            PDO::ATTR_ERRMODE          => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }
    return $pdo;
}

$pdo = getWpPdo();

try {
    if (isset($_GET['slug'])) {
        $stmt = $pdo->prepare("
            SELECT 
                p.ID,
                p.post_title AS title,
                p.post_name AS slug,
                p.post_excerpt AS excerpt,
                p.post_content AS content,
                p.post_date AS date,
                (
                    SELECT t.name 
                    FROM wp_terms t 
                    INNER JOIN wp_term_taxonomy tt ON t.term_id = tt.term_id 
                    INNER JOIN wp_term_relationships tr ON tt.term_taxonomy_id = tr.term_taxonomy_id 
                    WHERE tr.object_id = p.ID AND tt.taxonomy = 'category' 
                    LIMIT 1
                ) AS category
            FROM wp_posts p
            WHERE p.post_status = 'publish' AND p.post_type = 'post' AND p.post_name = :slug
            LIMIT 1
        ");
        $stmt->execute([':slug' => $_GET['slug']]);
        $row = $stmt->fetch();
        if (!$row) {
            // Check fallback mock data
            $mockPost = getMockPostBySlug($_GET['slug']);
            if ($mockPost) {
                echo json_encode($mockPost);
                exit();
            }
            http_response_code(404);
            echo json_encode(['error' => 'Not found']);
            exit();
        }
        echo json_encode(formatPostRow($row));
        exit();
    }

    // Return all posts
    $stmt = $pdo->query("
        SELECT 
            p.ID,
            p.post_title AS title,
            p.post_name AS slug,
            p.post_excerpt AS excerpt,
            p.post_content AS content,
            p.post_date AS date,
            (
                SELECT t.name 
                FROM wp_terms t 
                INNER JOIN wp_term_taxonomy tt ON t.term_id = tt.term_id 
                INNER JOIN wp_term_relationships tr ON tt.term_taxonomy_id = tr.term_taxonomy_id 
                WHERE tr.object_id = p.ID AND tt.taxonomy = 'category' 
                LIMIT 1
            ) AS category
        FROM wp_posts p
        WHERE p.post_status = 'publish' AND p.post_type = 'post'
        ORDER BY p.post_date DESC
    ");
    $rows = $stmt->fetchAll();
    if (empty($rows)) {
        echo json_encode(getMockPosts());
    } else {
        echo json_encode(array_map('formatPostRow', $rows));
    }
} catch (Exception $e) {
    // Fallback if wp_posts does not exist yet (Wordpress setup not run)
    if (isset($_GET['slug'])) {
        $mockPost = getMockPostBySlug($_GET['slug']);
        if ($mockPost) {
            echo json_encode($mockPost);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Not found']);
        }
    } else {
        echo json_encode(getMockPosts());
    }
}

function formatPostRow($row) {
    return [
        'id' => (int)$row['ID'],
        'title' => $row['title'],
        'slug' => $row['slug'],
        'summary' => !empty($row['excerpt']) ? $row['excerpt'] : wp_strip_all_tags(truncateText($row['content'], 180)),
        'content' => $row['content'],
        'tag' => !empty($row['category']) ? $row['category'] : 'Engineering',
        'date' => date('F Y', strtotime($row['date'])),
    ];
}

function truncateText($text, $limit) {
    if (strlen($text) > $limit) {
        return substr($text, 0, $limit) . '...';
    }
    return $text;
}

function wp_strip_all_tags($string, $remove_breaks = false) {
    $string = preg_replace('@<(script|style)[^>]*?>.*?</\\1>@si', '', $string);
    $string = strip_tags($string);
    if ($remove_breaks) {
        $string = preg_replace('/[\r\n\t ]+/', ' ', $string);
    }
    return trim($string);
}

function getMockPosts() {
    return [
        [
            'id' => 1,
            'title' => 'Why Off-the-Shelf IoT Fails in Critical Environments',
            'summary' => 'Off-the-shelf IoT devices often look capable on paper, yet break down under real operating conditions. This article explores where they fail—and what reliable systems do differently.',
            'tag' => 'IoT',
            'slug' => 'why-off-the-shelf-iot-fails',
            'date' => 'March 2025'
        ],
        [
            'id' => 2,
            'title' => 'Designing Reliable Biomedical Monitoring Systems',
            'summary' => 'Accuracy and continuity are non-negotiable in biomedical environments. This post examines the engineering decisions that separate dependable monitoring systems from unstable ones.',
            'tag' => 'BioMed',
            'slug' => 'designing-biomedical-monitoring',
            'date' => 'February 2025'
        ],
        [
            'id' => 3,
            'title' => 'Beyond GPS: What Real-Time Tracking Systems Must Deliver',
            'summary' => 'Location data alone rarely solves operational problems. This article looks at what modern tracking systems must deliver beyond basic GPS to be truly useful.',
            'tag' => 'Tracking',
            'slug' => 'beyond-gps-tracking',
            'date' => 'January 2025'
        ],
        [
            'id' => 4,
            'title' => 'Centralised vs On-Site Control in Digital Billboard Networks',
            'summary' => 'Managing a distributed billboard network involves trade-offs between local control and central oversight. This blog breaks down when each approach works—and when it doesn’t.',
            'tag' => 'Infrastructure',
            'slug' => 'centralised-vs-onsite-billboard',
            'date' => 'December 2024'
        ],
        [
            'id' => 5,
            'title' => 'Engineering for Long-Term Reliability in Industrial Systems',
            'summary' => 'Industrial electronics are expected to run continuously, not just function at launch. This article explores how engineering choices impact stability over time.',
            'tag' => 'Industrial',
            'slug' => 'engineering-long-term-reliability',
            'date' => 'November 2024'
        ],
        [
            'id' => 6,
            'title' => 'From Prototype to Deployment: Lessons from Real Systems',
            'summary' => 'What works in a prototype often fails in production. This post shares lessons learned while taking systems from concept to real-world deployment.',
            'tag' => 'R&D',
            'slug' => 'prototype-to-deployment',
            'date' => 'October 2024'
        ],
    ];
}

function getMockPostBySlug($slug) {
    if ($slug === 'why-off-the-shelf-iot-fails') {
        return [
            'id' => 1,
            'title' => 'Why Off-the-Shelf IoT Solutions Fail in Critical Environments',
            'tag' => 'IoT',
            'slug' => 'why-off-the-shelf-iot-fails',
            'date' => 'March 2025',
            'sections' => [
                [
                    'heading' => 'The Promise vs the Reality',
                    'content' => [
                        'Off-the-shelf IoT solutions are often marketed as fast, flexible, and cost-effective. On paper, they promise real-time data, easy deployment, and scalable monitoring across environments. For many basic use cases, this promise holds true.',
                        'However, when these solutions are deployed in critical environments—such as logistics operations, biomedical monitoring, industrial facilities, or safety-sensitive infrastructure—the gap between specification and reality becomes apparent. Systems that perform well in controlled conditions begin to fail under continuous operation, environmental stress, or operational complexity.',
                        'This is not a failure of IoT as a concept, but a limitation of generic design applied to non-generic problems.'
                    ]
                ],
                [
                    'heading' => 'A Real-World Reality Check',
                    'content' => [
                        'Critical environments rarely behave the way test environments do. Network coverage fluctuates, power availability is inconsistent, and hardware is exposed to heat, vibration, dust, or human interference. Data is expected to be reliable not for hours or days, but for months or years.',
                        'In such conditions, many off-the-shelf IoT systems begin to show weaknesses. Devices disconnect without clear recovery paths. Sensors drift or fail silently. Firmware updates become risky. Dashboards display data, but without enough context to support operational decisions.',
                        'What works as a demo often struggles when expected to operate continuously, unattended, and without tolerance for failure.'
                    ]
                ],
                [
                    'heading' => 'Reliability Over Feature Density',
                    'content' => [
                        'Off-the-shelf solutions often prioritise feature lists over stability. While a system may support dozens of sensors or analytics options, each additional feature increases complexity and potential failure points. In critical deployments, fewer well-tested functions often outperform feature-rich but fragile systems.'
                    ]
                ],
                [
                    'heading' => 'Environment-Driven Hardware Design',
                    'content' => [
                        'Generic devices are rarely designed for specific operating conditions. Exposure to temperature variations, electrical noise, vibration, or moisture can degrade performance over time. Without environment-specific design choices, long-term reliability becomes unpredictable.'
                    ]
                ],
                [
                    'heading' => 'Connectivity Assumptions',
                    'content' => [
                        'Many IoT platforms assume stable, continuous connectivity. In reality, networks drop, latency increases, and bandwidth fluctuates. Systems that cannot buffer data, recover gracefully, or operate in degraded modes quickly lose credibility in the field.'
                    ]
                ],
                [
                    'heading' => 'Firmware as a Long-Term Responsibility',
                    'content' => [
                        'Firmware is often treated as a one-time deliverable rather than a long-term responsibility. In critical environments, firmware must support remote updates, fault recovery, and predictable behaviour over extended runtimes. Generic firmware stacks frequently fall short here.'
                    ]
                ],
                [
                    'heading' => 'Operational Context, Not Just Data',
                    'content' => [
                        'Collecting data is not the same as enabling decisions. Off-the-shelf dashboards may show values and charts but lack the context required to understand why something happened, whether it matters, and what action is needed.'
                    ]
                ],
                [
                    'heading' => 'The Trade-Offs That Matter',
                    'content' => [
                        'Every system involves trade-offs, but off-the-shelf solutions often hide them. Decisions made to reduce cost or speed up deployment—such as shared hardware platforms, generic firmware, or fixed cloud architectures—can limit adaptability later.',
                        'In critical environments, these trade-offs surface quickly. Customisation becomes difficult, integrations are constrained, and workarounds accumulate. Over time, the system becomes harder to trust, even if it technically continues to function.',
                        'Engineering-led systems acknowledge these trade-offs early and design around them rather than discovering them after deployment.'
                    ]
                ],
                [
                    'heading' => 'What This Means for Decision-Makers',
                    'content' => [
                        'For technical leaders and operations teams, the key question is not whether an IoT solution works, but where it works and for how long.',
                        'Evaluating a system for a critical environment requires looking beyond specifications. Questions around long-term stability, failure handling, update strategies, and environmental suitability matter more than initial feature sets or dashboards.',
                        'Procurement decisions based purely on cost or speed often lead to higher operational risk and hidden long-term costs.'
                    ]
                ],
                [
                    'heading' => 'Applying These Lessons in Practice',
                    'content' => [
                        'In real deployments, systems that succeed tend to share common traits. They are designed with the operating environment in mind, not adapted to it later. Hardware, firmware, and software are treated as a single system rather than independent components. Most importantly, reliability is prioritised over rapid expansion of features.',
                        'These principles apply whether the system is tracking assets, monitoring biomedical parameters, or controlling infrastructure. The environments differ, but the engineering discipline required is consistent.'
                    ]
                ]
            ],
            'closingThought' => [
                'heading' => 'A Closing Thought',
                'content' => [
                    'Off-the-shelf IoT solutions are not inherently flawed—they are simply designed for general use. Critical environments are anything but general. Bridging that gap requires engineering choices that favour stability, context, and long-term performance over convenience.',
                    'Recognising this early often determines whether a system becomes a dependable operational tool or a recurring source of exceptions and workarounds.',
                    'If you are evaluating an IoT system for a critical or long-term deployment, these considerations are worth discussing early in the design phase.'
                ]
            ]
        ];
    }
    return null;
}
