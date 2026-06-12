import React from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const data = {
  title: 'Billboard Network Management',
  industry: 'Outdoor Media & Advertising',
  solutionsUsed: ['Billboard Controls', 'Billboard Portal'],
  deploymentType: 'Multi-location Network Deployment',
  clientBackground:
    'The client operates a distributed network of digital billboards across multiple locations. The infrastructure includes large-format outdoor displays that require continuous operation, consistent performance, and timely maintenance to meet advertising commitments. As the network expanded, the client required better visibility and centralised oversight to manage operations efficiently.',
  challenge: {
    description:
      'The client relied heavily on manual checks and site-based troubleshooting to monitor billboard performance. This approach resulted in delayed fault detection, increased downtime, and higher operational costs.',
    points: [
      'Limited real-time visibility across locations',
      'Dependency on on-site intervention for diagnostics',
      'Difficulty monitoring uptime and performance trends',
      'Inefficient response to power or hardware failures',
    ],
    summary:
      'The client needed a scalable solution that could provide centralised monitoring and control without disrupting existing infrastructure.',
  },
  solutionArchitecture: {
    description:
      'Smartosphere implemented a two-layer solution combining on-site intelligence and centralised software management.',
    points: [
      'Billboard Controls installed at each location to manage and monitor display hardware',
      'Embedded electronics and firmware for reliable device-level operation',
      'Secure data transmission from each site',
      'Billboard Portal, a cloud-based platform aggregating data across the network',
    ],
  },
  implementation: {
    description:
      'Deployment was carried out in phases to ensure continuity of operations.',
    points: [
      'Control units were installed at billboard sites with minimal downtime',
      'Operational parameters and alert conditions were configured',
      'The central dashboard was set up to reflect network structure',
      'System performance was validated under live operating conditions',
    ],
    summary:
      'This phased rollout allowed the client to gradually transition to centralised management without service disruption.',
  },
  keyFeatures: [
    'On-site hardware control and monitoring',
    'Centralised network dashboard',
    'Real-time status visibility',
    'Automated alerts for downtime and faults',
    'Historical performance reporting',
  ],
  outcomes: {
    description:
      'The billboard network management solution delivered tangible operational benefits.',
    points: [
      'Improved visibility across all billboard locations',
      'Faster identification and resolution of faults',
      'Reduced reliance on manual site checks',
      'Better uptime management and operational control',
    ],
    summary:
      'The client gained a unified view of the entire network, enabling more proactive and efficient management.',
  },
  whySmartosphere:
    'Smartosphere was selected for its ability to deliver both hardware and software as a unified solution. The integrated approach allowed the client to avoid multiple vendors and ensured seamless coordination between on-site controls and centralised monitoring.',
  relatedSolutions: ['Billboard Controls', 'Billboard Portal'],
  tagline:
    'Smartosphere Solutions LLP — Intelligent Management for Distributed Billboard Networks.',
};

const BillboardNetworkManagement = () => (
  <CaseStudyDetail data={data} />
);

export default BillboardNetworkManagement;
