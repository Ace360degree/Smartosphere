import React from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const data = {
  title: "Biomedical Monitoring System",
  industry: "Healthcare & Biomedical",
  solutionsUsed: ["BioMed", "MHITS"],
  deploymentType: "Pilot to Controlled Deployment",
  clientBackground:
    "The client is an organisation operating in a healthcare and biomedical monitoring environment, where continuous observation of human physiological parameters was required. The operating setup involved controlled conditions with a need for reliable data capture, minimal manual intervention, and structured access to monitoring information. Due to the sensitive nature of the environment, patient safety, data integrity, and system reliability were key priorities.",
  challenge: {
    description:
      "The client relied on manual and semi-automated monitoring methods, which made it difficult to maintain continuous visibility of biomedical parameters. Data was often collected intermittently, increasing the risk of delayed response to abnormal conditions.",
    points: [
      "Lack of real-time monitoring and alerts",
      "Dependence on manual observation",
      "Limited historical data for analysis and review",
      "Difficulty adapting existing systems to specific monitoring requirements",
    ],
    summary:
      "The client required a system that could provide continuous, accurate, and secure biomedical monitoring without disrupting existing workflows.",
  },
  solutionArchitecture: {
    description:
      "SmartoSphere designed a custom biomedical monitoring system using its BioMed and MHITS platforms.",
    points: [
      "Biomedical sensors selected based on monitoring requirements",
      "Custom electronic hardware for stable signal acquisition",
      "Embedded firmware to manage data capture and reliability",
      "Secure data transmission to a central platform",
      "Monitoring dashboards for real-time visibility and historical analysis",
    ],
  },
  implementation: {
    description:
      "The deployment was carried out in phases, beginning with a controlled pilot to validate system performance and data accuracy.",
    points: [
      "Sensors and devices were installed with minimal disruption",
      "Thresholds and alerts were configured in consultation with stakeholders",
      "System behaviour was tested under real operating conditions",
      "Monitoring dashboards were fine-tuned for clarity and usability",
    ],
    summary:
      "This phased approach ensured a smooth transition from pilot to operational use.",
  },
  keyFeatures: [
    "Continuous biomedical data acquisition",
    "Real-time threshold-based alerts",
    "Secure data transmission and storage",
    "Centralised monitoring dashboard",
    "Historical data logging and reporting",
  ],
  outcomes: {
    description:
      "The biomedical monitoring system delivered measurable operational improvements.",
    points: [
      "Improved consistency in biomedical data capture",
      "Faster response to abnormal conditions",
      "Reduced dependency on manual observation",
      "Structured access to historical monitoring data",
    ],
    summary:
      "The client gained confidence in monitoring continuity and system reliability, supporting better operational and safety outcomes.",
  },
  whySmartoSphere:
    "The client chose SmartoSphere for its ability to deliver a custom-engineered solution rather than a generic monitoring device. The in-house capability to design hardware, firmware, and software as a unified system enabled better adaptability and long-term reliability. SmartoSphere's phased deployment approach and focus on real-world validation further strengthened trust in the solution.",
  relatedSolutions: ["BioMed", "MHITS"],
  tagline:
    "SmartoSphere Solutions LLP — Engineering Reliable Monitoring for Biomedical Environments.",
};

const BiomedicalMonitoring = () => (
  <CaseStudyDetail data={data} />
);

export default BiomedicalMonitoring;
