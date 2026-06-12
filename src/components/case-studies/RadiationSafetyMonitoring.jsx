import React from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const data = {
  title: "Radiation Safety Monitoring System",
  industry: "Safety & Regulated Environments",
  solutionsUsed: ["Radiation Electronics"],
  deploymentType: "Controlled Environment Deployment",
  clientBackground:
    "The client operates in a regulated environment where radiation exposure must be continuously monitored to ensure safety and compliance. The setup involved controlled areas where accurate measurement, reliable data logging, and timely alerts were critical to protect personnel and maintain operational standards. Due to the nature of the environment, system reliability and data integrity were key requirements.",
  challenge: {
    description:
      "The client relied on standalone or manual radiation measurement methods, which provided limited visibility and delayed awareness of abnormal exposure levels. Data was often reviewed retrospectively, making it difficult to respond proactively to potential safety risks.",
    points: [
      "Lack of continuous radiation monitoring",
      "No centralised visibility of radiation levels",
      "Limited alerting for threshold breaches",
      "Difficulty maintaining structured historical records for compliance",
    ],
    summary:
      "The client required a solution that could deliver continuous monitoring, centralised oversight, and reliable reporting.",
  },
  solutionArchitecture: {
    description:
      "Smartosphere designed a radiation monitoring system using its Radiation Electronics platform.",
    points: [
      "Radiation sensors selected based on the operating environment",
      "Custom electronic hardware for stable data acquisition",
      "Embedded firmware for continuous measurement and reliability",
      "Secure data transmission to a central monitoring platform",
      "Dashboards and reports for real-time visibility and historical analysis",
    ],
  },
  implementation: {
    description:
      "The deployment was executed in a controlled manner to ensure safety and accuracy.",
    points: [
      "Sensors were installed and calibrated according to operational standards",
      "Alert thresholds were configured based on acceptable exposure limits",
      "Continuous monitoring was validated under real operating conditions",
      "Reporting views were aligned with compliance and audit needs",
    ],
    summary:
      "This approach ensured that the system met both operational and safety requirements.",
  },
  keyFeatures: [
    "Continuous radiation level measurement",
    "Threshold-based alerts and notifications",
    "Secure data logging and storage",
    "Centralised monitoring dashboard",
    "Historical reporting for audits and reviews",
  ],
  outcomes: {
    description:
      "The radiation safety monitoring system delivered clear safety and operational benefits.",
    points: [
      "Continuous visibility of radiation exposure levels",
      "Faster response to abnormal conditions",
      "Improved safety oversight for personnel",
      "Structured historical data to support compliance and audits",
    ],
    summary:
      "The client gained confidence in both safety monitoring and regulatory readiness.",
  },
  whySmartosphere:
    "The client chose Smartosphere for its ability to deliver a custom-engineered radiation monitoring solution rather than a generic measurement device. The integrated approach—covering hardware, firmware, and software—ensured reliable performance and adaptability to specific safety requirements. Smartosphere's emphasis on validation and long-term reliability was critical for deployment in a regulated environment.",
  relatedSolutions: ["Radiation Electronics"],
  tagline:
    "Smartosphere Solutions LLP — Engineering Safety Through Reliable Monitoring.",
};

const RadiationSafetyMonitoring = () => (
  <CaseStudyDetail data={data} />
);

export default RadiationSafetyMonitoring;
