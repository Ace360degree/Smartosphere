<?php
// admin/dashboard.php
require_once __DIR__ . '/config.php';

if (!isset($_SESSION['admin_authenticated'])) {
    header('Location: login.php');
    exit();
}

$pdo = getPdo();
$stmt = $pdo->query('SELECT id, title, industry, created_at FROM case_studies ORDER BY id DESC');
$cases = $stmt->fetchAll();
$successMsg = isset($_GET['msg']) ? htmlspecialchars($_GET['msg']) : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - SmartoSphere</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background: #0F1115;
            color: #fff;
            min-height: 100vh;
        }
        .top-bar {
            background: #16181D;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            padding: 16px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .top-bar h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 20px;
            font-weight: 700;
        }
        .top-bar a {
            color: #9ca3af;
            text-decoration: none;
            font-size: 13px;
            font-weight: 600;
            transition: color 0.2s;
        }
        .top-bar a:hover { color: #DB2442; }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px;
        }
        .header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
        }
        .header-row h2 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 28px;
            font-weight: 700;
        }
        .btn-add {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #EC8209, #DB2442);
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.25s;
        }
        .btn-add:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(219,36,66,0.3);
        }
        .success-msg {
            background: rgba(34,197,94,0.1);
            border: 1px solid rgba(34,197,94,0.3);
            color: #22c55e;
            padding: 10px 16px;
            border-radius: 8px;
            font-size: 13px;
            margin-bottom: 24px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background: #16181D;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.04);
        }
        th {
            text-align: left;
            padding: 14px 20px;
            font-size: 11px;
            font-weight: 700;
            color: #9ca3af;
            text-transform: uppercase;
            letter-spacing: 1px;
            background: rgba(255,255,255,0.02);
            border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        td {
            padding: 16px 20px;
            font-size: 14px;
            color: #d1d5db;
            border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: rgba(255,255,255,0.02); }
        .actions { display: flex; gap: 8px; }
        .btn-edit, .btn-delete {
            padding: 6px 14px;
            font-size: 12px;
            font-weight: 600;
            border-radius: 6px;
            text-decoration: none;
            transition: all 0.2s;
        }
        .btn-edit {
            color: #EC8209;
            background: rgba(236,130,9,0.08);
            border: 1px solid rgba(236,130,9,0.2);
        }
        .btn-edit:hover { background: rgba(236,130,9,0.15); }
        .btn-delete {
            color: #DB2442;
            background: rgba(219,36,66,0.08);
            border: 1px solid rgba(219,36,66,0.2);
        }
        .btn-delete:hover { background: rgba(219,36,66,0.15); }
        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #9ca3af;
        }
        .empty-state p { margin-bottom: 20px; font-size: 15px; }
    </style>
</head>
<body>
<div class="top-bar">
    <h1>SmartoSphere Admin</h1>
    <a href="logout.php">Logout</a>
</div>
<div class="container">
    <div class="header-row">
        <h2>Case Studies</h2>
        <a href="create.php" class="btn-add">+ Add New</a>
    </div>

    <?php if ($successMsg): ?>
        <div class="success-msg"><?= $successMsg ?></div>
    <?php endif; ?>

    <?php if (empty($cases)): ?>
        <div class="empty-state">
            <p>No case studies yet. Click "Add New" to create the first one.</p>
        </div>
    <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Industry</th>
                    <th>Created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($cases as $c): ?>
                <tr>
                    <td><?= $c['id'] ?></td>
                    <td style="color:#fff; font-weight:600;"><?= htmlspecialchars($c['title']) ?></td>
                    <td><?= htmlspecialchars($c['industry']) ?></td>
                    <td><?= $c['created_at'] ?></td>
                    <td class="actions">
                        <a href="edit.php?id=<?= $c['id'] ?>" class="btn-edit">Edit</a>
                        <a href="delete.php?id=<?= $c['id'] ?>" class="btn-delete" onclick="return confirm('Delete this case study?');">Delete</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</div>
</body>
</html>
