<?php
// admin/edit.php
require_once __DIR__ . '/config.php';

if (!isset($_SESSION['admin_authenticated'])) {
    header('Location: login.php');
    exit();
}

$pdo = getPdo();
$id = $_GET['id'] ?? null;
if (!$id) { header('Location: dashboard.php'); exit(); }

$stmt = $pdo->prepare('SELECT * FROM case_studies WHERE id = :id');
$stmt->execute([':id' => $id]);
$case = $stmt->fetch();
if (!$case) { header('Location: dashboard.php'); exit(); }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $stmt = $pdo->prepare('UPDATE case_studies SET title=:title, slug=:slug, industry=:industry, solutions_used=:solutions_used, deployment_type=:deployment_type, client_background=:client_background, challenge=:challenge, solution_architecture=:solution_architecture, implementation=:implementation, key_features=:key_features, outcomes=:outcomes, why_smarto_sphere=:why_smarto_sphere, related_solutions=:related_solutions, tagline=:tagline, updated_at=NOW() WHERE id=:id');
    $stmt->execute([
        ':title' => $_POST['title'] ?? '',
        ':slug' => slugify($_POST['title'] ?? ''),
        ':industry' => $_POST['industry'] ?? '',
        ':solutions_used' => json_encode(parseLines($_POST['solutions_used'] ?? '')),
        ':deployment_type' => $_POST['deployment_type'] ?? '',
        ':client_background' => $_POST['client_background'] ?? '',
        ':challenge' => json_encode([
            'description' => $_POST['challenge_description'] ?? '',
            'points' => parseLines($_POST['challenge_points'] ?? ''),
            'summary' => $_POST['challenge_summary'] ?? ''
        ]),
        ':solution_architecture' => json_encode([
            'description' => $_POST['solution_architecture_description'] ?? '',
            'points' => parseLines($_POST['solution_architecture_points'] ?? ''),
        ]),
        ':implementation' => json_encode([
            'description' => $_POST['implementation_description'] ?? '',
            'points' => parseLines($_POST['implementation_points'] ?? ''),
            'summary' => $_POST['implementation_summary'] ?? ''
        ]),
        ':key_features' => json_encode(parseLines($_POST['key_features'] ?? '')),
        ':outcomes' => json_encode([
            'description' => $_POST['outcomes_description'] ?? '',
            'points' => parseLines($_POST['outcomes_points'] ?? ''),
            'summary' => $_POST['outcomes_summary'] ?? ''
        ]),
        ':why_smarto_sphere' => $_POST['why_smarto_sphere'] ?? '',
        ':related_solutions' => json_encode(parseLines($_POST['related_solutions'] ?? '')),
        ':tagline' => $_POST['tagline'] ?? '',
        ':id' => $id,
    ]);
    header('Location: dashboard.php?msg=Case+study+updated+successfully');
    exit();
}

// Decode JSON fields for pre-filling
$challenge = json_decode($case['challenge'], true) ?: [];
$sa = json_decode($case['solution_architecture'], true) ?: [];
$impl = json_decode($case['implementation'], true) ?: [];
$out = json_decode($case['outcomes'], true) ?: [];
$solutionsUsed = json_decode($case['solutions_used'], true) ?: [];
$keyFeatures = json_decode($case['key_features'], true) ?: [];
$relatedSolutions = json_decode($case['related_solutions'], true) ?: [];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Case Study - Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #0F1115; color: #fff; min-height: 100vh; }
        .top-bar { background: #16181D; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 16px 40px; display: flex; justify-content: space-between; align-items: center; }
        .top-bar h1 { font-family: 'Space Grotesk', sans-serif; font-size: 20px; }
        .top-bar a { color: #9ca3af; text-decoration: none; font-size: 13px; font-weight: 600; }
        .top-bar a:hover { color: #EC8209; }
        .container { max-width: 800px; margin: 0 auto; padding: 40px; }
        h2 { font-family: 'Space Grotesk', sans-serif; font-size: 28px; margin-bottom: 32px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-size: 13px; font-weight: 600; color: #d1d5db; margin-bottom: 6px; }
        .form-group input, .form-group textarea {
            width: 100%; padding: 10px 14px; background: #1C1F26; border: 1px solid rgba(255,255,255,0.08);
            border-radius: 8px; color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none; transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #EC8209; }
        .form-group textarea { min-height: 100px; resize: vertical; }
        .section-title { font-size: 18px; font-weight: 700; color: #EC8209; margin: 32px 0 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); }
        .hint { font-size: 11px; color: #6b7280; margin-top: 4px; }
        .btn-row { display: flex; gap: 12px; margin-top: 32px; }
        .btn-submit {
            padding: 12px 28px; background: linear-gradient(135deg, #EC8209, #DB2442); color: #fff;
            font-size: 14px; font-weight: 700; border: none; border-radius: 8px; cursor: pointer; transition: all 0.25s;
        }
        .btn-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(219,36,66,0.3); }
        .btn-back {
            padding: 12px 28px; background: transparent; color: #9ca3af; font-size: 14px; font-weight: 600;
            border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center;
        }
        .btn-back:hover { color: #fff; border-color: rgba(255,255,255,0.2); }
    </style>
</head>
<body>
<div class="top-bar">
    <h1>SmartoSphere Admin</h1>
    <a href="dashboard.php">Back to Dashboard</a>
</div>
<div class="container">
    <h2>Edit Case Study</h2>
    <form method="POST" action="">
        <div class="form-group"><label>Title</label><input type="text" name="title" value="<?= htmlspecialchars($case['title']) ?>" required></div>
        <div class="form-group"><label>Industry</label><input type="text" name="industry" value="<?= htmlspecialchars($case['industry']) ?>" required></div>
        <div class="form-group"><label>Solutions Used</label><textarea name="solutions_used" rows="3"><?= implode("\n", $solutionsUsed) ?></textarea><div class="hint">One per line</div></div>
        <div class="form-group"><label>Deployment Type</label><input type="text" name="deployment_type" value="<?= htmlspecialchars($case['deployment_type']) ?>"></div>
        <div class="form-group"><label>Client Background</label><textarea name="client_background"><?= htmlspecialchars($case['client_background']) ?></textarea></div>

        <div class="section-title">Challenge</div>
        <div class="form-group"><label>Description</label><textarea name="challenge_description"><?= htmlspecialchars($challenge['description'] ?? '') ?></textarea></div>
        <div class="form-group"><label>Points</label><textarea name="challenge_points"><?= implode("\n", $challenge['points'] ?? []) ?></textarea><div class="hint">One per line</div></div>
        <div class="form-group"><label>Summary</label><textarea name="challenge_summary"><?= htmlspecialchars($challenge['summary'] ?? '') ?></textarea></div>

        <div class="section-title">Solution Architecture</div>
        <div class="form-group"><label>Description</label><textarea name="solution_architecture_description"><?= htmlspecialchars($sa['description'] ?? '') ?></textarea></div>
        <div class="form-group"><label>Points</label><textarea name="solution_architecture_points"><?= implode("\n", $sa['points'] ?? []) ?></textarea><div class="hint">One per line</div></div>

        <div class="section-title">Implementation</div>
        <div class="form-group"><label>Description</label><textarea name="implementation_description"><?= htmlspecialchars($impl['description'] ?? '') ?></textarea></div>
        <div class="form-group"><label>Points</label><textarea name="implementation_points"><?= implode("\n", $impl['points'] ?? []) ?></textarea><div class="hint">One per line</div></div>
        <div class="form-group"><label>Summary</label><textarea name="implementation_summary"><?= htmlspecialchars($impl['summary'] ?? '') ?></textarea></div>

        <div class="section-title">Key Features</div>
        <div class="form-group"><textarea name="key_features"><?= implode("\n", $keyFeatures) ?></textarea><div class="hint">One per line</div></div>

        <div class="section-title">Outcomes</div>
        <div class="form-group"><label>Description</label><textarea name="outcomes_description"><?= htmlspecialchars($out['description'] ?? '') ?></textarea></div>
        <div class="form-group"><label>Points</label><textarea name="outcomes_points"><?= implode("\n", $out['points'] ?? []) ?></textarea><div class="hint">One per line</div></div>
        <div class="form-group"><label>Summary</label><textarea name="outcomes_summary"><?= htmlspecialchars($out['summary'] ?? '') ?></textarea></div>

        <div class="section-title">Additional</div>
        <div class="form-group"><label>Why SmartoSphere</label><textarea name="why_smarto_sphere"><?= htmlspecialchars($case['why_smarto_sphere']) ?></textarea></div>
        <div class="form-group"><label>Related Solutions</label><textarea name="related_solutions"><?= implode("\n", $relatedSolutions) ?></textarea><div class="hint">One per line</div></div>
        <div class="form-group"><label>Tagline</label><input type="text" name="tagline" value="<?= htmlspecialchars($case['tagline']) ?>"></div>

        <div class="btn-row">
            <button type="submit" class="btn-submit">Save Changes</button>
            <a href="dashboard.php" class="btn-back">Cancel</a>
        </div>
    </form>
</div>
</body>
</html>
