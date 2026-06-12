import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS setup
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const dbConfig = {
    host: '192.185.129.7',
    user: 'smartg6v_solutions',
    password: 'smartospheresolutions',
    database: 'smartg6v_solutions',
  };

  const smtpConfig = {
    host: 'mail.smartospheresolutions.com',
    port: 465,
    secure: true,
    auth: {
      user: 'no-reply@smartospheresolutions.com',
      pass: 'Fx8QiREKxGfK',
    },
    tls: {
      rejectUnauthorized: false
    }
  };

  try {
    const { 
      formSource, 
      fullName, 
      email, 
      phone, 
      organisation, 
      website, 
      requirements, 
      message, 
      enquiryType, 
      areaOfInterest 
    } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ success: false, error: 'Please fill all required fields.' });
    }

    // 1. Connect to MySQL Database
    const connection = await mysql.createConnection(dbConfig);
    
    // Create table if not exists
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS enquiries (
          id INT AUTO_INCREMENT PRIMARY KEY,
          form_source VARCHAR(100),
          full_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(50) NOT NULL,
          organisation VARCHAR(255),
          website VARCHAR(255),
          enquiry_type VARCHAR(100),
          area_of_interest VARCHAR(150),
          requirements TEXT,
          message TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert data
    await connection.execute(
      `INSERT INTO enquiries 
      (form_source, full_name, email, phone, organisation, website, enquiry_type, area_of_interest, requirements, message) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        formSource || 'Unknown Form',
        fullName || '',
        email || '',
        phone || '',
        organisation || '',
        website || '',
        enquiryType || '',
        areaOfInterest || '',
        requirements || '',
        message || ''
      ]
    );

    await connection.end();

    // 2. Setup Email Transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // 3. Send Admin Notification
    const adminHtml = `
      <h2>New Enquiry Received</h2>
      <p><strong>Source:</strong> ${formSource || 'Unknown Form'}</p>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${organisation ? \`<p><strong>Organisation:</strong> \${organisation}</p>\` : ''}
      ${website ? \`<p><strong>Website:</strong> \${website}</p>\` : ''}
      ${enquiryType ? \`<p><strong>Enquiry Type:</strong> \${enquiryType}</p>\` : ''}
      ${areaOfInterest ? \`<p><strong>Area of Interest:</strong> \${areaOfInterest}</p>\` : ''}
      ${requirements ? \`<p><strong>Requirements:</strong><br/>\${requirements.replace(/\\n/g, '<br/>')}</p>\` : ''}
      ${message ? \`<p><strong>Message:</strong><br/>\${message.replace(/\\n/g, '<br/>')}</p>\` : ''}
    `;

    await transporter.sendMail({
      from: '"Smartosphere Web Form" <no-reply@smartospheresolutions.com>',
      to: 'boa@smartospheresolutions.com',
      replyTo: email,
      subject: `New Enquiry from ${fullName} via ${formSource || 'Website'}`,
      html: adminHtml
    });

    // 4. Send Autoresponder to User
    await transporter.sendMail({
      from: '"Smartosphere Solutions" <no-reply@smartospheresolutions.com>',
      to: email,
      subject: 'Thank you for reaching out to Smartosphere Solutions',
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for reaching out to Smartosphere Solutions.</p>
        <p>We have successfully received your enquiry. Our team is currently reviewing your details, and an engineering specialist will get back to you within 24 hours.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The Smartosphere Team</strong></p>
      `
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, error: 'Server error processing request. ' + (error.message || '') });
  }
}
