import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail, Phone, MapPin, ArrowRight, Send,
  Cpu, Cog, LayoutGrid, ClipboardCheck, Users, MessageSquare
} from "lucide-react";

const areasOfInterest = [
  "Tracking & Monitoring",
  "Biomedical Systems",
  "Industrial Automation",
  "Infrastructure / Outdoor Systems",
  "Other",
];

const demoTopics = [
  { icon: Cpu, text: "System architecture and capabilities" },
  { icon: Cog, text: "Deployment considerations" },
  { icon: LayoutGrid, text: "Customisation possibilities" },
  { icon: Users, text: "Q&A with engineering stakeholders" },
];

const processSteps = [
  { num: "01", icon: ClipboardCheck, title: "Requirement Review", desc: "Our team reviews the requirement" },
  { num: "02", icon: Users, title: "Expert Connection", desc: "The appropriate engineering or solution lead connects with you" },
  { num: "03", icon: MessageSquare, title: "Focused Discussion", desc: "Discussions focus on feasibility, approach, and next steps" },
];

const Contact = () => {
  const [enquiryType, setEnquiryType] = useState("product");
  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    message: "",
  });

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const demoRef = useRef(null);
  const processRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const formInView = useInView(formRef, { once: true, margin: "-80px" });
  const demoInView = useInView(demoRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ enquiryType, ...formData });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          background-color: #0F1115;
          color: #ffffff;
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100vh;
          padding-top: 80px;
        }

        /* Hero Styling */
        .contact-hero {
          position: relative;
          padding: 80px 0 60px;
          overflow: hidden;
        }

        .hero-glow-1 {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(235, 28, 36, 0.05) 0%, transparent 70%);
          filter: blur(100px);
          pointer-events: none;
        }

        .hero-glow-2 {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.05) 0%, transparent 70%);
          filter: blur(100px);
          pointer-events: none;
        }

        .contact-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #EC8209;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .contact-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ff7e05 0%, #eb1c24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-desc {
          font-size: 18px;
          color: #9ca3af;
          line-height: 1.6;
          max-width: 700px;
          margin-bottom: 16px;
        }

        .contact-subdesc {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 700px;
        }

        /* Enquiry Section Grid */
        .enquiry-section {
          padding: 80px 0;
          position: relative;
        }

        .enquiry-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 60px;
        }

        @media (max-width: 992px) {
          .enquiry-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .enquiry-left-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .enquiry-left-desc {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 32px;
        }

        .enquiry-options {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .enquiry-btn {
          width: 100%;
          text-align: left;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background-color: #161920;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          color: inherit;
        }

        .enquiry-btn.active {
          border-color: #EC8209;
          background-color: rgba(236, 130, 9, 0.15);
          box-shadow: 0 0 25px rgba(236, 130, 9, 0.08);
        }

        .enquiry-btn:hover:not(.active) {
          border-color: rgba(236, 130, 9, 0.3);
        }

        .radio-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: border-color 0.3s ease;
        }

        .enquiry-btn.active .radio-circle {
          border-color: #EC8209;
        }

        .radio-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #EC8209;
        }

        .enquiry-btn-title {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .enquiry-btn-desc {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.5;
        }

        /* Contact Details Cards */
        .info-cards-stack {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          padding: 20px;
          border-radius: 12px;
          background-color: #161920;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .info-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .info-card-icon {
          color: #EC8209;
          filter: drop-shadow(0 0 4px rgba(236, 130, 9, 0.4));
        }

        .info-card-title {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
        }

        .info-link {
          font-size: 14px;
          color: #d1d5db;
          display: block;
          transition: color 0.2s ease;
        }

        .info-link:hover {
          color: #EC8209;
        }

        .info-sublink {
          font-size: 13px;
          color: #9ca3af;
          margin-top: 4px;
          display: block;
        }

        .info-text {
          font-size: 14px;
          color: #d1d5db;
        }

        .info-subtext {
          font-size: 13px;
          color: #9ca3af;
          margin-top: 4px;
        }

        /* Contact Form */
        .form-container {
          background-color: #161920;
          border-radius: 16px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 576px) {
          .form-container {
            padding: 24px;
          }
        }

        .form-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(236, 130, 9, 0.03) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
        }

        .form-heading {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .form-subheading {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 32px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 576px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-span-2 {
          grid-column: span 2;
        }

        @media (max-width: 576px) {
          .form-span-2 {
            grid-column: span 1;
          }
        }

        .form-label {
          font-size: 13px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 8px;
          display: block;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 12px 16px;
          background-color: #0F1115;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          color: #ffffff;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #4b5563;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #EC8209;
          box-shadow: 0 0 0 1px rgba(236, 130, 9, 0.2);
        }

        .form-textarea {
          resize: none;
        }

        .input-hint {
          font-size: 12px;
          color: #6b7280;
          margin-top: 6px;
          line-height: 1.4;
        }

        .submit-btn {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          color: #ffffff;
          background: linear-gradient(135deg, #ff7e05 0%, #eb1c24 100%);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .submit-btn:hover {
          box-shadow: 0 0 25px rgba(236, 130, 9, 0.4);
          transform: translateY(-1px);
        }

        .submit-btn svg {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover svg {
          transform: translateX(2px);
        }

        /* Demo Section */
        .demo-section {
          padding: 80px 0;
          position: relative;
        }

        .demo-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(circle, rgba(235, 28, 36, 0.03) 0%, transparent 70%);
          filter: blur(100px);
          pointer-events: none;
        }

        .text-center {
          text-align: center;
        }

        .section-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #EC8209;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }

        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .section-desc {
          font-size: 16px;
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto 56px;
          line-height: 1.6;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        @media (max-width: 992px) {
          .demo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .demo-grid {
            grid-template-columns: 1fr;
          }
        }

        .demo-card {
          background-color: #161920;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
          transition: all 0.3s ease;
        }

        .demo-card:hover {
          border-color: rgba(236, 130, 9, 0.3);
        }

        .demo-icon-container {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background-color: rgba(236, 130, 9, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          transition: box-shadow 0.3s ease;
        }

        .demo-card:hover .demo-icon-container {
          box-shadow: 0 0 20px rgba(236, 130, 9, 0.25);
        }

        .demo-icon-container svg {
          color: #EC8209;
          filter: drop-shadow(0 0 4px rgba(236, 130, 9, 0.4));
        }

        .demo-text {
          font-size: 14px;
          color: #d1d5db;
          line-height: 1.5;
        }

        .demo-btn-container {
          text-align: center;
        }

        .demo-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          color: #ffffff;
          background: linear-gradient(135deg, #EC8209 0%, #eb1c24 100%);
          transition: all 0.3s ease;
        }

        .demo-btn:hover {
          box-shadow: 0 0 30px rgba(236, 130, 9, 0.4);
          transform: translateY(-1px);
        }

        .demo-btn svg {
          transition: transform 0.3s ease;
        }

        .demo-btn:hover svg {
          transform: translateX(2px);
        }

        /* Map styling */
        .map-section {
          padding: 40px 0;
        }

        .map-frame-container {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          height: 350px;
          position: relative;
        }

        /* Process Section */
        .process-section {
          padding: 80px 0;
          position: relative;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 896px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .process-card {
          text-align: center;
          position: relative;
        }

        .process-num {
          font-size: 48px;
          font-weight: 700;
          color: rgba(236, 130, 9, 0.12);
          margin-bottom: 8px;
          line-height: 1;
        }

        .process-icon-container {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background-color: rgba(236, 130, 9, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .process-icon-container svg {
          color: #EC8209;
          filter: drop-shadow(0 0 4px rgba(236, 130, 9, 0.4));
        }

        .process-card-title {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .process-card-desc {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.5;
        }

        .process-tagline {
          text-align: center;
          margin-top: 64px;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
        }

        .process-tagline-accent {
          color: #EC8209;
        }
      `}</style>

      {/* Hero */}
      <section ref={heroRef} className="contact-hero">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />

        <div className="container">
          <motion.span
            {...fadeUp()}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="contact-label"
          >
            Contact Us
          </motion.span>
          <motion.h1
            {...fadeUp(0.1)}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="contact-title"
          >
            Start a Technical{" "}
            <span className="gradient-text">
              Conversation
            </span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="contact-desc"
          >
            At SmartoSphere Solutions LLP, we work closely with organisations to understand operational challenges and design practical, deployable technology solutions.
          </motion.p>
          <motion.p
            {...fadeUp(0.3)}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="contact-subdesc"
          >
            Whether you are evaluating an existing product or exploring a custom development requirement, the best place to start is a clear conversation.
          </motion.p>
        </div>
      </section>

      {/* Enquiry Type Selector + Form */}
      <section ref={formRef} className="enquiry-section">
        <div className="container">
          <div className="enquiry-grid">

            {/* Left: Enquiry Type */}
            <motion.div
              {...fadeUp()}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="enquiry-left-title">
                What are you looking to discuss?
              </h2>
              <p className="enquiry-left-desc">
                This helps us route your enquiry to the right engineering team.
              </p>

              <div className="enquiry-options">
                {/* Product Enquiry */}
                <button
                  onClick={() => setEnquiryType("product")}
                  className={`enquiry-btn ${enquiryType === "product" ? "active" : ""}`}
                >
                  <div className="radio-circle">
                    {enquiryType === "product" && <div className="radio-inner" />}
                  </div>
                  <div>
                    <h3 className="enquiry-btn-title">Product Enquiry</h3>
                    <p className="enquiry-btn-desc">
                      For discussions around existing SmartoSphere solutions such as tracking systems, biomedical monitoring, industrial electronics, or infrastructure control.
                    </p>
                  </div>
                </button>

                {/* Custom Development */}
                <button
                  onClick={() => setEnquiryType("custom")}
                  className={`enquiry-btn ${enquiryType === "custom" ? "active" : ""}`}
                >
                  <div className="radio-circle">
                    {enquiryType === "custom" && <div className="radio-inner" />}
                  </div>
                  <div>
                    <h3 className="enquiry-btn-title">Custom Development / Engineering</h3>
                    <p className="enquiry-btn-desc">
                      For organisations looking to build a custom hardware–software solution tailored to a specific operational or technical requirement.
                    </p>
                  </div>
                </button>
              </div>

              {/* Contact Info Cards */}
              <div className="info-cards-stack">
                <div className="info-card">
                  <div className="info-card-header">
                    <Mail size={18} className="info-card-icon" />
                    <span className="info-card-title">Email</span>
                  </div>
                  <a href="mailto:info@smartospheresolutions.com" className="info-link">
                    info@smartospheresolutions.com
                  </a>
                  <a href="mailto:engineering@smartospheresolutions.com" className="info-sublink">
                    engineering@smartospheresolutions.com
                  </a>
                </div>
                <div className="info-card">
                  <div className="info-card-header">
                    <Phone size={18} className="info-card-icon" />
                    <span className="info-card-title">Phone</span>
                  </div>
                  <a href="tel:+91XXXXXXXXXX" className="info-link">
                    +91-XXXXXXXXXX
                  </a>
                </div>
                <div className="info-card">
                  <div className="info-card-header">
                    <MapPin size={18} className="info-card-icon" />
                    <span className="info-card-title">Office</span>
                  </div>
                  <p className="info-text">SmartoSphere Solutions LLP</p>
                  <p className="info-subtext">India</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              {...fadeUp(0.2)}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
            >
              <form onSubmit={handleSubmit} className="form-container">
                <div className="form-glow" />

                <h3 className="form-heading">
                  {enquiryType === "product" ? "Product Enquiry" : "Custom Development Enquiry"}
                </h3>
                <p className="form-subheading">
                  Fill in the details below and we'll get back to you promptly.
                </p>

                <div className="form-grid">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="form-label">Organisation Name</label>
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="form-input"
                      placeholder="Company or organisation"
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                  <div className="form-span-2">
                    <label className="form-label">Area of Interest</label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="form-select"
                    >
                      <option value="">Select an area...</option>
                      {areasOfInterest.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-span-2">
                    <label className="form-label">Message / Brief Requirement *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                      placeholder="Share a brief description of your requirement, operating environment, or problem statement. Technical details are welcome."
                    />
                    <p className="input-hint">
                      You can share a brief description of your requirement, operating environment, or problem statement. Technical details are welcome.
                    </p>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={16} />
                  Submit Enquiry
                  <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book a Demo */}
      <section ref={demoRef} className="demo-section">
        <div className="demo-glow" />
        <div className="container">
          <motion.div
            {...fadeUp()}
            animate={demoInView ? { opacity: 1, y: 0 } : {}}
            className="text-center"
          >
            <span className="section-label">Book a Demo</span>
            <h2 className="section-title">
              See How the System Works
            </h2>
            <p className="section-desc">
              If you are evaluating one of our solutions and would like a walkthrough, you can request a demo session with our team.
            </p>
          </motion.div>

          <div className="demo-grid">
            {demoTopics.map((t, i) => (
              <motion.div
                key={t.text}
                {...fadeUp(i * 0.1)}
                animate={demoInView ? { opacity: 1, y: 0 } : {}}
                className="demo-card"
              >
                <div className="demo-icon-container">
                  <t.icon size={24} />
                </div>
                <p className="demo-text">{t.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.4)}
            animate={demoInView ? { opacity: 1, y: 0 } : {}}
            className="demo-btn-container"
          >
            <a href="#" className="demo-btn">
              Book a Demo Session
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="container">
          <div className="map-frame-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SmartoSphere Office Location"
            />
          </div>
        </div>
      </section>

      {/* What Happens After */}
      <section ref={processRef} className="process-section">
        <div className="container">
          <motion.div
            {...fadeUp()}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-center"
          >
            <span className="section-label">What Happens Next</span>
            <h2 className="section-title">
              After You Reach Out
            </h2>
            <p className="section-desc">
              We prioritise clarity and relevance over generic sales follow-ups.
            </p>
          </motion.div>

          <div className="process-grid">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.num}
                {...fadeUp(i * 0.15)}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                className="process-card"
              >
                <div className="process-num">{s.num}</div>
                <div className="process-icon-container">
                  <s.icon size={28} />
                </div>
                <h3 className="process-card-title">{s.title}</h3>
                <p className="process-card-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.5)}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="process-tagline"
          >
            SmartoSphere Solutions LLP —{" "}
            <span className="process-tagline-accent">Engineering Conversations That Lead to Practical Solutions.</span>
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
