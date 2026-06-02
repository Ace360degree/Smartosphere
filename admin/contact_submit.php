<?php
// admin/contact_submit.php
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
$enquiry_type = trim($input['enquiryType'] ?? '');
$full_name = trim($input['fullName'] ?? '');
$organisation = trim($input['organisation'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$area_of_interest = trim($input['areaOfInterest'] ?? '');
$message = trim($input['message'] ?? '');

// Validation
if (empty($enquiry_type) || empty($full_name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing: enquiryType, fullName, email, and message are required.']);
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
    $stmt = $pdo->prepare('INSERT INTO contact_submissions (enquiry_type, full_name, organisation, email, phone, area_of_interest, message) 
                           VALUES (:enquiry_type, :full_name, :organisation, :email, :phone, :area_of_interest, :message)');
    $stmt->execute([
        ':enquiry_type' => $enquiry_type,
        ':full_name' => $full_name,
        ':organisation' => $organisation ? $organisation : null,
        ':email' => $email,
        ':phone' => $phone ? $phone : null,
        ':area_of_interest' => $area_of_interest ? $area_of_interest : null,
        ':message' => $message,
    ]);

    // Send Emails
    $admin_email = 'info@smartospheresolutions.com';
    $sender_name = 'SmartoSphere Solutions';
    $noreply_email = 'noreply@smartospheresolutions.com';

    // Email Common HTML Styling
    $email_style = "
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e1e8ed; }
            .header { background: linear-gradient(135deg, #ff7e05 0%, #eb1c24 100%); padding: 30px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.9; }
            .content { padding: 30px; line-height: 1.6; }
            .content h2 { color: #eb1c24; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f4f6f8; padding-bottom: 10px; }
            .detail-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .detail-table th, .detail-table td { padding: 12px; text-align: left; border-bottom: 1px solid #f0f2f5; }
            .detail-table th { width: 35%; color: #666; font-weight: 600; font-size: 13px; text-transform: uppercase; background-color: #fafbfc; }
            .detail-table td { color: #333; font-size: 14px; }
            .message-box { background: #fafbfc; border-left: 4px solid #eb1c24; padding: 15px; border-radius: 4px; font-style: italic; margin-top: 10px; }
            .footer { background: #161920; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px; }
            .footer a { color: #ff7e05; text-decoration: none; }
        </style>
    ";

    // 1. ADMIN NOTIFICATION
    $admin_subject = "New Contact Enquiry: " . ($enquiry_type === 'product' ? 'Product Enquiry' : 'Custom Development');
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
        <title>New Contact Enquiry</title>
        {$email_style}
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>New Enquiry Received</h1>
                <p>Smartosphere Administration Portal</p>
            </div>
            <div class='content'>
                <h2>Submission Details</h2>
                <table class='detail-table'>
                    <tr><th>Enquiry Type</th><td>" . htmlspecialchars($enquiry_type === 'product' ? 'Product Enquiry' : 'Custom Development') . "</td></tr>
                    <tr><th>Full Name</th><td>" . htmlspecialchars($full_name) . "</td></tr>
                    <tr><th>Organisation</th><td>" . htmlspecialchars($organisation ? $organisation : 'N/A') . "</td></tr>
                    <tr><th>Email Address</th><td>" . htmlspecialchars($email) . "</td></tr>
                    <tr><th>Phone Number</th><td>" . htmlspecialchars($phone ? $phone : 'N/A') . "</td></tr>
                    <tr><th>Area of Interest</th><td>" . htmlspecialchars($area_of_interest ? $area_of_interest : 'N/A') . "</td></tr>
                </table>
                <h2>Message / Requirement Details</h2>
                <div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div>
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
    $sender_subject = "We have received your enquiry - SmartoSphere Solutions";
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
        <title>Enquiry Acknowledgment</title>
        {$email_style}
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Thank You for Reaching Out!</h1>
                <p>SmartoSphere Solutions LLP</p>
            </div>
            <div class='content'>
                <p>Dear " . htmlspecialchars($full_name) . ",</p>
                <p>Thank you for contacting SmartoSphere Solutions. We have successfully received your enquiry and our technical team is currently reviewing your request.</p>
                <p>Here is a summary of the details you submitted for your reference:</p>
                <table class='detail-table'>
                    <tr><th>Enquiry Type</th><td>" . htmlspecialchars($enquiry_type === 'product' ? 'Product Enquiry' : 'Custom Development') . "</td></tr>
                    <tr><th>Organisation</th><td>" . htmlspecialchars($organisation ? $organisation : 'N/A') . "</td></tr>
                    <tr><th>Area of Interest</th><td>" . htmlspecialchars($area_of_interest ? $area_of_interest : 'N/A') . "</td></tr>
                </table>
                <p>One of our specialists or engineering leads will get in touch with you shortly (usually within 24 to 48 business hours) to discuss feasibility, operational approaches, and next steps.</p>
                <p>If you have any urgent attachments or updates, please feel free to reply directly to this email or send an email to <a href='mailto:{$admin_email}'>{$admin_email}</a>.</p>
                <br>
                <p>Best regards,<br><strong>Technical & Solutions Desk</strong><br>SmartoSphere Solutions LLP</p>
            </div>
            <div class='footer'>
                <p>SmartoSphere Solutions LLP — Engineering Practical Hardware-Software Solutions.</p>
                <p><a href='https://smartospheresolutions.com'>Visit our website</a></p>
            </div>
        </div>
    </body>
    </html>
    ";

    @mail($email, $sender_subject, $sender_body, $sender_headers_str);

    echo json_encode(['success' => true, 'message' => 'Your enquiry has been successfully submitted. We will be in touch shortly.']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}
