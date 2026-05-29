<?php
// admin/create.php
require_once __DIR__ . '/config.php';

if (!isset($_SESSION['admin_authenticated'])) {
    header('Location: login.php');
    exit();
}

$pdo = getPdo();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $stmt = $pdo->prepare('INSERT INTO case_studies (title, slug, industry, solutions_used, deployment_type, client_background, challenge, solution_architecture, implementation, key_features, outcomes, why_smarto_sphere, related_solutions, tagline, created_at, updated_at) VALUES (:title, :slug, :industry, :solutions_used, :deployment_type, :client_background, :challenge, :solution_architecture, :implementation, :key_features, :outcomes, :why_smarto_sphere, :related_solutions, :tagline, NOW(), NOW())');
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
        ':tagline' => $_POST['tagline'] ?? ''
    ]);
    header('Location: dashboard.php?msg=Case+study+created+successfully');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Case Study - Admin</title>
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
    <h2>Add New Case Study</h2>
    <form method="POST" action="">
        <div class="form-group">
            <label>Title</label>
            <input type="text" name="title" required>
        </div>
        <div class="form-group">
            <label>Industry</label>
            <input type="text" name="industry" required>
        </div>
        <div class="form-group">
            <label>Solutions Used</label>
            <textarea name="solutions_used" rows="3"></textarea>
            <div class="hint">One solution per line</div>
        </div>
        <div class="form-group">
            <label>Deployment Type</label>
            <input type="text" name="deployment_type">
        </div>
        <div class="form-group">
            <label>Client Background</label>
            <textarea name="client_background"></textarea>
        </div>

        <div class="section-title">Challenge</div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="challenge_description"></textarea>
        </div>
        <div class="form-group">
            <label>Points</label>
            <textarea name="challenge_points"></textarea>
            <div class="hint">One point per line</div>
        </div>
        <div class="form-group">
            <label>Summary</label>
            <textarea name="challenge_summary"></textarea>
        </div>

        <div class="section-title">Solution Architecture</div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="solution_architecture_description"></textarea>
        </div>
        <div class="form-group">
            <label>Points</label>
            <textarea name="solution_architecture_points"></textarea>
            <div class="hint">One point per line</div>
        </div>

        <div class="section-title">Implementation</div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="implementation_description"></textarea>
        </div>
        <div class="form-group">
            <label>Points</label>
            <textarea name="implementation_points"></textarea>
            <div class="hint">One point per line</div>
        </div>
        <div class="form-group">
            <label>Summary</label>
            <textarea name="implementation_summary"></textarea>
        </div>

        <div class="section-title">Key Features</div>
        <div class="form-group">
            <textarea name="key_features"></textarea>
            <div class="hint">One feature per line</div>
        </div>

        <div class="section-title">Outcomes</div>
        <div class="form-group">
            <label>Description</label>
            <textarea name="outcomes_description"></textarea>
        </div>
        <div class="form-group">
            <label>Points</label>
            <textarea name="outcomes_points"></textarea>
            <div class="hint">One point per line</div>
        </div>
        <div class="form-group">
            <label>Summary</label>
            <textarea name="outcomes_summary"></textarea>
        </div>

        <div class="section-title">Additional</div>
        <div class="form-group">
            <label>Why SmartoSphere</label>
            <textarea name="why_smarto_sphere"></textarea>
        </div>
        <div class="form-group">
            <label>Related Solutions</label>
            <textarea name="related_solutions"></textarea>
            <div class="hint">One solution per line</div>
        </div>
        <div class="form-group">
            <label>Tagline</label>
            <input type="text" name="tagline">
        </div>

        <div class="btn-row">
            <button type="submit" class="btn-submit">Create Case Study</button>
            <a href="dashboard.php" class="btn-back">Cancel</a>
        </div>
    </form>
</div>
</body>
</html>
