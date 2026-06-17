// api/submit.js
// Vercel serverless function — thin proxy to cPanel PHP handlers.
//
// Vercel's cloud cannot reach cPanel's MySQL on port 3306 (firewall blocked).
// The PHP handlers on admin-staging already handle DB writes + emails correctly
// via cPanel's local MySQL and PHP mail(). This function just forwards the request.

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const body = req.body;

    if (!body) {
      return res.status(400).json({ success: false, error: 'Request body is empty.' });
    }

    // Choose the correct PHP endpoint based on which form was submitted
    const formSource = body.formSource || '';
    let phpEndpoint;

    if (formSource === 'Contact Form') {
      phpEndpoint = 'https://admin.smartospheresolutions.com/admin/contact_submit.php';
    } else {
      // Demo Request / Get in Touch / any other form → demo_submit.php
      phpEndpoint = 'https://admin.smartospheresolutions.com/admin/demo_submit.php';
    }

    // Forward the request to the cPanel PHP handler
    const phpResponse = await fetch(phpEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const responseText = await phpResponse.text();

    let responseJson;
    try {
      responseJson = JSON.parse(responseText);
    } catch {
      // PHP returned non-JSON (e.g. a PHP error page) — surface the raw error
      console.error('Non-JSON response from PHP handler:', responseText);
      return res.status(502).json({
        success: false,
        error: 'Backend error. Please try again later.',
        detail: responseText.substring(0, 300),
      });
    }

    return res.status(phpResponse.status).json(responseJson);

  } catch (error) {
    console.error('Proxy error in api/submit.js:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.',
    });
  }
}
