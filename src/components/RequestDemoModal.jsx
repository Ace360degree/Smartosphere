import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Globe, FileText, X, Send, CheckCircle2, AlertCircle } from "lucide-react";
const RequestDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    requirements: "",
  });

  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const url = "/api/submit";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formSource: 'Demo Request Form', ...formData }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          website: "",
          requirements: "",
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          website: "",
          requirements: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting demo request:", err);
      setStatus("error");
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="demo-modal-wrapper">
          <style>{`
            .demo-modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: 'Inter', -apple-system, sans-serif;
            }

            .demo-modal-backdrop {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(43, 48, 59, 0.425);
              backdrop-filter: blur(12px);
            }

            .demo-modal-container {
              position: relative;
              width: 100%;
              max-width: 460px;
              background-color: #2B303B;
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 24px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
              overflow: hidden;
              z-index: 10000;
              margin: 20px;
            }

            .demo-modal-header {
              padding: 24px 28px 20px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.06);
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
            }

            .demo-modal-header-left {
              display: flex;
              flex-direction: column;
              gap: 4px;
            }

            .demo-modal-title {
              font-size: 24px;
              font-weight: 700;
              color: #ffffff;
              margin: 0;
              letter-spacing: -0.5px;
            }

            .demo-modal-subtitle {
              font-size: 13.5px;
              color: #8E9BAE;
              margin: 0;
              font-weight: 400;
            }

            .demo-modal-close-btn {
              background: none;
              border: none;
              color: #64748B;
              cursor: pointer;
              padding: 4px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: transform, opacity, background-color, border-color, color 0.2s ease;
            }

            .demo-modal-close-btn:hover {
              color: #ffffff;
              background-color: rgba(255, 255, 255, 0.05);
            }

            .demo-modal-body {
              padding: 28px;
              max-height: calc(100vh - 180px);
              overflow-y: auto;
            }

            .demo-modal-form {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }

            .demo-form-group {
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .demo-form-label {
              font-size: 11px;
              font-weight: 700;
              color: #8E9BAE;
              letter-spacing: 1.5px;
              text-transform: uppercase;
            }

            .demo-input-container {
              display: flex;
              align-items: center;
              background-color: #2B303B;
              border: 1px solid rgba(255, 255, 255, 0.06);
              border-radius: 12px;
              padding: 12px 16px;
              gap: 12px;
              transition: transform, opacity, background-color, border-color, color 0.3s ease;
            }

            .demo-input-container:focus-within {
              border-color: #EC8209;
              box-shadow: 0 0 0 1px rgba(236, 130, 9, 0.2);
            }

            .demo-input-icon {
              color: #4A5568;
              flex-shrink: 0;
              transition: color 0.3s ease;
            }

            .demo-input-container:focus-within .demo-input-icon {
              color: #EC8209;
            }

            .demo-input {
              width: 100%;
              background: none;
              border: none;
              color: #ffffff;
              font-size: 14px;
              outline: none;
              padding: 0;
              font-family: inherit;
            }

            .demo-input::placeholder {
              color: #4A5568;
            }

            .demo-textarea-container {
              align-items: flex-start;
            }

            .demo-textarea-icon {
              margin-top: 2px;
            }

            .demo-textarea {
              width: 100%;
              background: none;
              border: none;
              color: #ffffff;
              font-size: 14px;
              outline: none;
              padding: 0;
              resize: none;
              min-height: 80px;
              font-family: inherit;
            }

            .demo-textarea::placeholder {
              color: #4A5568;
            }

            .demo-submit-btn {
              width: 100%;
              background: linear-gradient(135deg, #EC8209 0%, #DB2442 100%);
              color: #fff;
              border: none;
              border-radius: 14px;
              padding: 16px;
              font-size: 15px;
              font-weight: 700;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              transition: transform, opacity, background-color, border-color, color 0.3s ease;
              box-shadow: 0 4px 20px rgba(236, 130, 9, 0.15);
              margin-top: 10px;
            }

            .demo-submit-btn:hover:not(:disabled) {
              background-color: #EC8209;
              transform: translateY(-1px);
              box-shadow: 0 8px 25px rgba(236, 130, 9, 0.3);
            }

            .demo-submit-btn:disabled {
              opacity: 0.6;
              cursor: not-allowed;
            }

            /* Success State */
            .demo-success-container {
              text-align: center;
              padding: 30px 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
            }

            .demo-success-icon {
              color: #8CD4E6;
            }

            .demo-success-title {
              font-size: 20px;
              font-weight: 700;
              color: #ffffff;
              margin: 0;
            }

            .demo-success-desc {
              font-size: 14px;
              color: #8E9BAE;
              line-height: 1.6;
              margin: 0 0 16px 0;
            }

            /* Error State */
            .demo-error-container {
              display: flex;
              align-items: center;
              gap: 10px;
              background-color: rgba(239, 68, 68, 0.1);
              border: 1px solid rgba(239, 68, 68, 0.2);
              border-radius: 12px;
              padding: 12px 16px;
              color: #f87171;
              font-size: 13.5px;
              line-height: 1.4;
            }
          `}</style>

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="demo-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="demo-modal-container"
          >
            {/* Header */}
            <div className="demo-modal-header">
              <div className="demo-modal-header-left">
                <h3 className="demo-modal-title">Get in Touch</h3>
                <p className="demo-modal-subtitle">Please fill your details</p>
              </div>
              <button onClick={onClose} className="demo-modal-close-btn" aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="demo-modal-body">
              {status === "success" ? (
                <div className="demo-success-container">
                  <CheckCircle2 size={56} className="demo-success-icon" />
                  <h4 className="demo-success-title">Thank You!</h4>
                  <p className="demo-success-desc">
                    Your demo request has been successfully submitted. An engineering specialist will reach out to you within 24 hours to schedule your walkthrough.
                  </p>
                  <button onClick={onClose} className="demo-submit-btn">
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="demo-modal-form">
                  {status === "error" && (
                    <div className="demo-error-container">
                      <AlertCircle size={20} className="flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="demo-form-group">
                    <label className="demo-form-label">Full Name *</label>
                    <div className="demo-input-container">
                      <User size={16} className="demo-input-icon" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="demo-input"
                        placeholder="John Doe"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="demo-form-group">
                    <label className="demo-form-label">Business Email *</label>
                    <div className="demo-input-container">
                      <Mail size={16} className="demo-input-icon" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="demo-input"
                        placeholder="john@company.com"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="demo-form-group">
                    <label className="demo-form-label">Phone Number *</label>
                    <div className="demo-input-container">
                      <Phone size={16} className="demo-input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="demo-input"
                        placeholder="+1 234 567 8900"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="demo-form-group">
                    <label className="demo-form-label">Website Address</label>
                    <div className="demo-input-container">
                      <Globe size={16} className="demo-input-icon" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="demo-input"
                        placeholder="https://yourcompany.com"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="demo-form-group">
                    <label className="demo-form-label">Requirement Details</label>
                    <div className="demo-input-container demo-textarea-container">
                      <FileText size={16} className="demo-input-icon demo-textarea-icon" />
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="demo-textarea"
                        placeholder="Briefly describe your requirements..."
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="demo-submit-btn"
                  >
                    {status === "submitting" ? (
                      "Confirming..."
                    ) : (
                      <>
                        Submit Your Request
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RequestDemoModal;
