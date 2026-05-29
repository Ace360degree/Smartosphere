import React from "react";
import LegalPageLayout from "./LegalPageLayout";

const contact = {
  company: "SmartoSphere Solutions LLP",
  email: "info@smartospheresolutions.com",
  website: "https://smartospheresolutions.com",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "a. Information You Provide Voluntarily — When you fill out forms on our website, contact us, request a demo, or communicate with us, you may provide: Name, Organisation name, Email address, Phone number, Enquiry details or technical requirements. Providing this information is voluntary, but certain features may not be available without it.",
      "b. Automatically Collected Information — When you visit our website, certain technical information may be collected automatically, such as: IP address, Browser type and version, Device information, Pages visited and time spent on the site. This information is used to understand website usage and improve performance.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information collected for purposes including: Responding to enquiries and requests, Scheduling discussions or demo sessions, Understanding user interests and requirements, Improving our website, content, and user experience, Internal record-keeping and communication.",
      "We do not sell, rent, or trade personal information.",
    ],
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: [
      "Our website may use cookies or similar technologies to enhance user experience and analyse website traffic. Cookies help us understand how visitors interact with our site so we can improve usability and content relevance.",
      "You can choose to disable cookies through your browser settings. Doing so may affect certain website functionalities.",
    ],
  },
  {
    title: "4. Information Sharing and Disclosure",
    content: [
      "We do not share personal information with third parties except: When required to comply with legal obligations, To protect our rights, safety, or property, With trusted service providers who assist in operating our website or communications, under confidentiality obligations.",
      "Any such sharing is limited to what is necessary for the intended purpose.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We take reasonable technical and organisational measures to protect personal information from unauthorised access, loss, misuse, or disclosure. While we strive to safeguard information, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by applicable laws and regulations.",
    ],
  },
  {
    title: "7. External Links",
    content: [
      "Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party sites. Visitors are encouraged to review the privacy policies of any external websites they visit.",
    ],
  },
  {
    title: "8. Your Rights",
    content: [
      "Depending on applicable laws, you may have the right to: Request access to personal information we hold about you, Request correction of inaccurate information, Request deletion of personal information, subject to legal obligations.",
      "Requests can be made by contacting us using the details provided below.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.",
    ],
  },
  {
    title: "10. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date. Continued use of the website after changes indicates acceptance of the updated policy.",
    ],
  },
];

const PrivacyPolicy = () => (
  <LegalPageLayout
    title="Privacy Policy"
    intro="SmartoSphere Solutions LLP ('SmartoSphere', 'we', 'our', or 'us') is committed to protecting the privacy of visitors, customers, and partners who interact with our website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or communicate with us. By accessing or using our website, you agree to the practices described in this Privacy Policy."
    sections={sections}
    closingNote="SmartoSphere Solutions LLP — Respecting Privacy Through Responsible Engineering."
    contact={contact}
  />
);

export default PrivacyPolicy;
