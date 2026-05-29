<?php
// admin/delete.php
require_once __DIR__ . '/config.php';

if (!isset($_SESSION['admin_authenticated'])) {
    header('Location: login.php');
    exit();
}

$id = $_GET['id'] ?? null;
if ($id) {
    $pdo = getPdo();
    $stmt = $pdo->prepare('DELETE FROM case_studies WHERE id = :id');
    $stmt->execute([':id' => $id]);
}

header('Location: dashboard.php?msg=Case+study+deleted');
exit();
