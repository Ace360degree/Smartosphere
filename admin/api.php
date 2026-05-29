<?php
// admin/api.php
// JSON API endpoint for the React front-end to fetch case study data
// Usage:
//   GET api.php              -> returns all case studies
//   GET api.php?slug=xxx     -> returns a single case study by slug
//   GET api.php?id=123       -> returns a single case study by ID

require_once __DIR__ . '/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$pdo = getPdo();

if (isset($_GET['slug'])) {
    $stmt = $pdo->prepare('SELECT * FROM case_studies WHERE slug = :slug LIMIT 1');
    $stmt->execute([':slug' => $_GET['slug']]);
    $row = $stmt->fetch();
    if (!$row) {
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
        exit();
    }
    echo json_encode(formatRow($row));
    exit();
}

if (isset($_GET['id'])) {
    $stmt = $pdo->prepare('SELECT * FROM case_studies WHERE id = :id LIMIT 1');
    $stmt->execute([':id' => $_GET['id']]);
    $row = $stmt->fetch();
    if (!$row) {
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
        exit();
    }
    echo json_encode(formatRow($row));
    exit();
}

// Return all
$stmt = $pdo->query('SELECT * FROM case_studies ORDER BY id DESC');
$rows = $stmt->fetchAll();
$result = array_map('formatRow', $rows);
echo json_encode($result);

function formatRow($row)
{
    return [
        'id' => (int)$row['id'],
        'title' => $row['title'],
        'slug' => $row['slug'] ?? '',
        'industry' => $row['industry'],
        'solutionsUsed' => json_decode($row['solutions_used'], true) ?: [],
        'deploymentType' => $row['deployment_type'],
        'clientBackground' => $row['client_background'],
        'challenge' => json_decode($row['challenge'], true) ?: [],
        'solutionArchitecture' => json_decode($row['solution_architecture'], true) ?: [],
        'implementation' => json_decode($row['implementation'], true) ?: [],
        'keyFeatures' => json_decode($row['key_features'], true) ?: [],
        'outcomes' => json_decode($row['outcomes'], true) ?: [],
        'whySmartoSphere' => $row['why_smarto_sphere'],
        'relatedSolutions' => json_decode($row['related_solutions'], true) ?: [],
        'tagline' => $row['tagline'],
    ];
}
