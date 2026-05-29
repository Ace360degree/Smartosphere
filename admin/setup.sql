-- SQL setup script for Smartosphere case_studies table
-- Run this in your MySQL client: mysql -u root smartosphere < admin/setup.sql

CREATE DATABASE IF NOT EXISTS smartosphere CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE smartosphere;

CREATE TABLE IF NOT EXISTS case_studies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    industry VARCHAR(255) NOT NULL,
    solutions_used JSON,
    deployment_type VARCHAR(255),
    client_background TEXT,
    challenge JSON,
    solution_architecture JSON,
    implementation JSON,
    key_features JSON,
    outcomes JSON,
    why_smarto_sphere TEXT,
    related_solutions JSON,
    tagline VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY idx_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed: Billboard Network Management
INSERT INTO case_studies (title, slug, industry, solutions_used, deployment_type, client_background, challenge, solution_architecture, implementation, key_features, outcomes, why_smarto_sphere, related_solutions, tagline) VALUES (
    'Billboard Network Management',
    'billboard-network-management',
    'Outdoor Media & Advertising',
    '["Billboard Controls", "Billboard Portal"]',
    'Multi-location Network Deployment',
    'The client operates a distributed network of digital billboards across multiple locations. The infrastructure includes large-format outdoor displays that require continuous operation, consistent performance, and timely maintenance to meet advertising commitments. As the network expanded, the client required better visibility and centralised oversight to manage operations efficiently.',
    '{"description":"The client relied heavily on manual checks and site-based troubleshooting to monitor billboard performance. This approach resulted in delayed fault detection, increased downtime, and higher operational costs.","points":["Limited real-time visibility across locations","Dependency on on-site intervention for diagnostics","Difficulty monitoring uptime and performance trends","Inefficient response to power or hardware failures"],"summary":"The client needed a scalable solution that could provide centralised monitoring and control without disrupting existing infrastructure."}',
    '{"description":"SmartoSphere implemented a two-layer solution combining on-site intelligence and centralised software management.","points":["Billboard Controls installed at each location to manage and monitor display hardware","Embedded electronics and firmware for reliable device-level operation","Secure data transmission from each site","Billboard Portal, a cloud-based platform aggregating data across the network"]}',
    '{"description":"Deployment was carried out in phases to ensure continuity of operations.","points":["Control units were installed at billboard sites with minimal downtime","Operational parameters and alert conditions were configured","The central dashboard was set up to reflect network structure","System performance was validated under live operating conditions"],"summary":"This phased rollout allowed the client to gradually transition to centralised management without service disruption."}',
    '["On-site hardware control and monitoring","Centralised network dashboard","Real-time status visibility","Automated alerts for downtime and faults","Historical performance reporting"]',
    '{"description":"The billboard network management solution delivered tangible operational benefits.","points":["Improved visibility across all billboard locations","Faster identification and resolution of faults","Reduced reliance on manual site checks","Better uptime management and operational control"],"summary":"The client gained a unified view of the entire network, enabling more proactive and efficient management."}',
    'SmartoSphere was selected for its ability to deliver both hardware and software as a unified solution. The integrated approach allowed the client to avoid multiple vendors and ensured seamless coordination between on-site controls and centralised monitoring.',
    '["Billboard Controls", "Billboard Portal"]',
    'SmartoSphere Solutions LLP - Intelligent Management for Distributed Billboard Networks.'
);
