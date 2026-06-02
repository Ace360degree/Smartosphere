<?php
// admin/demo_submit.php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit();
}

// Get JSON body
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit();
}

// Extract and sanitize inputs
$full_name = trim($input['fullName'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$website = trim($input['website'] ?? '');
$requirements = trim($input['requirements'] ?? '');

// Validation
if (empty($full_name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing: fullName, email, and phone are required.']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit();
}

try {
    $pdo = getPdo();
    
    // Save to Database
    $stmt = $pdo->prepare('INSERT INTO demo_requests (full_name, email, phone, website, requirements) 
                           VALUES (:full_name, :email, :phone, :website, :requirements)');
    $stmt->execute([
        ':full_name' => $full_name,
        ':email' => $email,
        ':phone' => $phone,
        ':website' => $website ? $website : null,
        ':requirements' => $requirements ? $requirements : null,
    ]);

    // Send Emails
    $admin_email = 'info@smartospheresolutions.com';
    $sender_name = 'SmartoSphere Solutions';
    $noreply_email = 'noreply@smartospheresolutions.com';

    // Email Common HTML Styling
    $email_style = "
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0B0F17; margin: 0; padding: 20px; color: #e2e8f0; }
            .container { max-width: 600px; margin: 0 auto; background: #161920; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); }
            .header { background: linear-gradient(135deg, #8CD4E6 0%, #3b82f6 100%); padding: 30px; text-align: center; color: #0d1117; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.9; font-weight: 500; }
            .content { padding: 30px; line-height: 1.6; }
            .content h2 { color: #8CD4E6; font-size: 18px; margin-top: 0; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; }
            .detail-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .detail-table th, .detail-table td { padding: 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .detail-table th { width: 35%; color: #94a3b8; font-weight: 600; font-size: 13px; text-transform: uppercase; background-color: rgba(255,255,255,0.02); }
            .detail-table td { color: #f8fafc; font-size: 14px; }
            .message-box { background: #0B0F17; border-left: 4px solid #8CD4E6; padding: 15px; border-radius: 4px; font-style: italic; margin-top: 10px; color: #cbd5e1; }
            .footer { background: #0B0F17; padding: 20px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.05); }
            .footer a { color: #8CD4E6; text-decoration: none; }
        </style>
    ";

    // 1. ADMIN NOTIFICATION
    $admin_subject = "New Product Demo Requested by " . $full_name;
    $admin_headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=utf-8',
        "From: {$sender_name} <{$noreply_email}>",
        "Reply-To: {$full_name} <{$email}>",
        'X-Mailer: PHP/' . phpversion()
    ];
    $admin_headers_str = implode("\r\n", $admin_headers);

    $admin_body = "
    <html>
    <head>
        <title>New Product Demo Request</title>
        {$email_style}
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>New Demo Session Requested</h1>
                <p>Smartosphere Administration Portal</p>
            </div>
            <div class='content'>
                <h2>Demo Request Details</h2>
                <table class='detail-table'>
                    <tr><th>Full Name</th><td>" . htmlspecialchars($full_name) . "</td></tr>
                    <tr><th>Business Email</th><td>" . htmlspecialchars($email) . "</td></tr>
                    <tr><th>Phone Number</th><td>" . htmlspecialchars($phone) . "</td></tr>
                    <tr><th>Website Address</th><td>" . htmlspecialchars($website ? $website : 'N/A') . "</td></tr>
                </table>
                <h2>Requirement Details / Notes</h2>
                <div class='message-box'>" . ($requirements ? nl2br(htmlspecialchars($requirements)) : 'No custom requirements specified.') . "</div>
            </div>
            <div class='footer'>
                <p>&copy; " . date('Y') . " SmartoSphere Solutions LLP. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    ";

    @mail($admin_email, $admin_subject, $admin_body, $admin_headers_str);

    // 2. SENDER AUTORESPONDER
    $sender_subject = "Demo Request Confirmed - SmartoSphere Solutions";
    $sender_headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=utf-8',
        "From: {$sender_name} <{$noreply_email}>",
        "Reply-To: {$admin_email}",
        'X-Mailer: PHP/' . phpversion()
    ];
    $sender_headers_str = implode("\r\n", $sender_headers);

    $sender_body = "
    <html>
    <head>
        <title>Demo Request Acknowledgment</title>
        {$email_style}
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Your Demo Request is Confirmed</h1>
                <p>SmartoSphere Solutions LLP</p>
            </div>
            <div class='content'>
                <p>Dear " . htmlspecialchars($full_name) . ",</p>
                <p>Thank you for requesting a product demo session with SmartoSphere Solutions. We have received your request and our engineering desk is processing it.</p>
                <p>Here is a summary of the details you submitted:</p>
                <table class='detail-table'>
                    <tr><th>Business Email</th><td>" . htmlspecialchars($email) . "</td></tr>
                    <tr><th>Phone Number</th><td>" . htmlspecialchars($phone) . "</td></tr>
                    <tr><th>Website Address</th><td>" . htmlspecialchars($website ? $website : 'N/A') . "</td></tr>
                </table>
                <p><strong>What happens next?</strong><br>An engineering or solution architect from our relevant team will connect with you via email or phone within 24 hours to schedule a calendar slot. We will prepare a customized walkthrough of our tracking, industrial, or biomedical control solutions tailored to your operational environment.</p>
                <p>If you have any further technical details or slides you'd like to share ahead of time, please feel free to reply directly to this mail or reach us at <a href='mailto:{$admin_email}'>{$admin_email}</a>.</p>
                <br>
                <p>Best regards,<br><strong>Technical & Solutions Desk</strong><br>SmartoSphere Solutions LLP</p>
            </div>
            <div class='footer'>
                <p>SmartoSphere Solutions LLP — Centralized Display & Control Hardware-Software Solutions.</p>
                <p><a href='https://smartospheresolutions.com'>Visit our website</a></p>
            </div>
        </div>
    </body>
    </html>
    ";

    @mail($email, $sender_subject, $sender_body, $sender_headers_str);

    echo json_encode(['success' => true, 'message' => 'Demo request submitted successfully. Our engineering desk will connect with you shortly.']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}
