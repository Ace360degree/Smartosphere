import LegalPageLayout from "./LegalPageLayout";

const contact = {
  company: "SmartoSphere Solutions LLP",
  email: "boa@smartospheresolutions.com",
  website: "https://smartospheresolutions.com",
};

const sections = [
  {
    title: "1. Use of the Website",
    content: [
      "This website is intended to provide information about our products, engineering capabilities, services, and case studies. You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site.",
      "You must not attempt to: Gain unauthorised access to the website or its systems, Disrupt or interfere with the website's functionality, Use the website for fraudulent, misleading, or unlawful activities.",
    ],
  },
  {
    title: "2. Information Disclaimer",
    content: [
      "The content on this website is provided for general informational purposes only. While we strive to keep information accurate and up to date, SmartoSphere makes no warranties or representations regarding the completeness, accuracy, or suitability of the information for any specific purpose.",
      "Technical descriptions, product references, and case studies are indicative in nature and may vary based on configuration, deployment environment, or custom requirements.",
    ],
  },
  {
    title: "3. No Professional or Technical Advice",
    content: [
      "Nothing on this website constitutes professional, engineering, technical, or legal advice. Any reliance you place on information obtained from this website is at your own discretion and risk. Specific requirements should be discussed directly with our engineering team.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "All content on this website, including text, graphics, logos, images, designs, and layout, is the property of SmartoSphere Solutions LLP or its licensors and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, or republish any content from this website without prior written permission from SmartoSphere.",
    ],
  },
  {
    title: "5. Product and Service Enquiries",
    content: [
      "Submitting an enquiry, contact form, or demo request through the website does not constitute a binding agreement. Any products, services, pricing, timelines, or deliverables will be subject to separate written agreements agreed upon by both parties.",
    ],
  },
  {
    title: "6. Third-Party Links",
    content: [
      "This website may contain links to third-party websites for reference or convenience. SmartoSphere does not control and is not responsible for the content, policies, or practices of any third-party websites. Accessing such links is at your own risk.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, SmartoSphere Solutions LLP shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to: Use or inability to use the website, Reliance on information provided on the website, Errors, omissions, or inaccuracies in website content.",
    ],
  },
  {
    title: "8. Availability of the Website",
    content: [
      "We do not guarantee uninterrupted or error-free access to the website. The website may be modified, suspended, or discontinued at any time without notice for maintenance, updates, or other reasons.",
    ],
  },
  {
    title: "9. Privacy",
    content: [
      "Your use of the website is also governed by our Privacy Policy, which explains how we collect and use personal information. By using the website, you consent to the practices described in the Privacy Policy.",
    ],
  },
  {
    title: "10. Governing Law and Jurisdiction",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from or relating to these Terms or the website shall be subject to the exclusive jurisdiction of the courts located in India.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    content: [
      "SmartoSphere reserves the right to update or modify these Terms at any time. Any changes will be effective immediately upon posting on this page. Continued use of the website constitutes acceptance of the revised Terms.",
    ],
  },
];

const TermsConditions = () => (
  <LegalPageLayout
    title="Terms & Conditions"
    intro="These Terms & Conditions ('Terms') govern your access to and use of the website operated by SmartoSphere Solutions LLP ('SmartoSphere', 'we', 'our', or 'us'). By accessing or using this website, you agree to be bound by these Terms. If you do not agree, please do not use the website."
    sections={sections}
    closingNote="SmartoSphere Solutions LLP — Engineering Trust Through Transparent Terms."
    contact={contact}
  />
);

export default TermsConditions;
