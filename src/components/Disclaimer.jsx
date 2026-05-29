import LegalPageLayout from "./LegalPageLayout";

const contact = {
  company: "SmartoSphere Solutions LLP",
  email: "info@smartospheresolutions.com",
  website: "https://smartospheresolutions.com",
};

const sections = [
  {
    title: "No Professional or Technical Advice",
    content: [
      "The content on this website does not constitute engineering, technical, medical, legal, or professional advice. All information is provided for general understanding and reference only.",
      "Specific technical requirements, system designs, configurations, and deployment decisions should always be discussed directly with SmartoSphere's engineering team and documented through formal agreements.",
    ],
  },
  {
    title: "Product & Solution Representation",
    content: [
      "Descriptions of products, solutions, capabilities, case studies, and system architectures on this website are indicative in nature. Actual implementations may vary based on operating environment, configuration, regulatory requirements, and customer-specific needs.",
      "Nothing on this website should be interpreted as a binding commitment, guarantee of performance, or standard specification unless explicitly stated in a written contract.",
    ],
  },
  {
    title: "Case Studies & Examples",
    content: [
      "Case studies and examples shared on this website are provided for illustrative purposes only. Outcomes, results, and system behaviour may differ based on context, usage conditions, and implementation scope.",
      "Past examples do not guarantee similar results in future deployments.",
    ],
  },
  {
    title: "Third-Party Information & Links",
    content: [
      "This website may contain references or links to third-party websites, products, or services. SmartoSphere does not endorse, control, or take responsibility for the content, availability, accuracy, or practices of any third-party sites.",
      "Accessing third-party links is done at your own risk.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, SmartoSphere Solutions LLP shall not be liable for any loss or damage, including but not limited to indirect or consequential loss or damage, arising from: Use of this website, Inability to access the website, Reliance on information presented on the website, Errors, omissions, or inaccuracies in website content.",
    ],
  },
  {
    title: "Website Availability",
    content: [
      "We do not guarantee that the website will be available at all times, free of errors, or uninterrupted. The website may be updated, modified, suspended, or withdrawn at any time without prior notice.",
    ],
  },
  {
    title: "Changes to This Disclaimer",
    content: [
      "SmartoSphere reserves the right to modify or update this Disclaimer at any time. Any changes will be effective immediately upon posting on this page.",
    ],
  },
];

const Disclaimer = () => (
  <LegalPageLayout
    title="Disclaimer"
    intro="The information provided on this website is for general informational purposes only. SmartoSphere Solutions LLP ('SmartoSphere', 'we', 'our', or 'us') makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, suitability, or availability of the information contained on this website. Any reliance you place on such information is strictly at your own discretion and risk."
    sections={sections}
    closingNote="SmartoSphere Solutions LLP — Transparent Communication, Responsible Engineering."
    contact={contact}
  />
);

export default Disclaimer;
