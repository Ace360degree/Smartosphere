<?php
// admin/login.php
require_once __DIR__ . '/config.php';

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pwd = $_POST['password'] ?? '';
    if ($pwd === ADMIN_PASSWORD) {
        $_SESSION['admin_authenticated'] = true;
        header('Location: dashboard.php');
        exit();
    } else {
        $error = 'Invalid password.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - SmartoSphere</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background: #0F1115;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            color: #fff;
        }
        .login-card {
            background: #16181D;
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 16px;
            padding: 48px 40px;
            width: 400px;
            max-width: 90vw;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .login-card h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .login-card p {
            color: #9ca3af;
            font-size: 14px;
            margin-bottom: 32px;
        }
        .error-msg {
            background: rgba(219,36,66,0.1);
            border: 1px solid rgba(219,36,66,0.3);
            color: #DB2442;
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 13px;
            margin-bottom: 20px;
        }
        label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: #d1d5db;
            margin-bottom: 8px;
        }
        input[type=password] {
            width: 100%;
            padding: 12px 16px;
            background: #1C1F26;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 8px;
            color: #fff;
            font-size: 15px;
            outline: none;
            transition: border-color 0.2s;
            margin-bottom: 24px;
        }
        input[type=password]:focus {
            border-color: #DB2442;
        }
        button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #EC8209, #DB2442);
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.25s;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(219,36,66,0.3);
        }
        .brand {
            text-align: center;
            margin-top: 24px;
            font-size: 12px;
            color: #4b5563;
        }
    </style>
</head>
<body>
<div class="login-card">
    <h1>Admin Panel</h1>
    <p>Enter password to access the dashboard</p>
    <?php if ($error): ?>
        <div class="error-msg"><?= htmlspecialchars($error) ?></div>
    <?php endif; ?>
    <form method="POST" action="">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter admin password" required autofocus />
        <button type="submit">Sign In</button>
    </form>
    <div class="brand">SmartoSphere Solutions LLP</div>
</div>
</body>
</html>
