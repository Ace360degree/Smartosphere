-- SQL script to create contact_submissions and demo_requests tables
-- Run this to update your database: mysql -u root -p smartosphere < admin/leads_setup.sql

USE smartosphere;

CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    enquiry_type VARCHAR(50) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    organisation VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    area_of_interest VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS demo_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    website VARCHAR(255),
    requirements TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
