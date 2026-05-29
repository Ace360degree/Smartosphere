<?php
// admin/config.php
// Database credentials - adjust to match your MySQL setup
define('DB_HOST', '127.0.0.1');
define('DB_PORT', '3306');
define('DB_DATABASE', 'smartosphere');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');

// Admin password (plain-text)
define('ADMIN_PASSWORD', 'smartosphere');

// Start session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// PDO singleton
function getPdo()
{
    static $pdo = null;
    if ($pdo === null) {
        $dsn = 'mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';dbname=' . DB_DATABASE . ';charset=utf8mb4';
        $pdo = new PDO($dsn, DB_USERNAME, DB_PASSWORD, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }
    return $pdo;
}

// Helper: parse newline-separated textarea into array
function parseLines($text)
{
    $val = $text ?? '';
    $lines = explode("\n", $val);
    $trimmed = array_map('trim', $lines);
    return array_values(array_filter($trimmed));
}

// Helper: generate URL slug from title
function slugify($title)
{
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
    return trim($slug, '-');
}
