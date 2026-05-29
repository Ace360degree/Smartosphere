import React from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const data = {
  title: "GoKart Track Control System",
  industry: "Motorsport & Recreational Facilities",
  solutionsUsed: ["GoKart Servomotor"],
  deploymentType: "Track-Level Operational Deployment",
  clientBackground:
    "The client operates a GoKart racing and recreational track catering to both training and general users. The facility required consistent vehicle performance, controlled speed behaviour, and a safe driving experience across all karts on the track. As the track usage increased, maintaining uniform control and ensuring safety through manual or basic electronic systems became increasingly challenging.",
  challenge: {
    description:
      "The client faced issues with inconsistent motor response and limited control over speed regulation across vehicles. Existing control mechanisms did not allow fine-grained adjustment of motor behaviour, resulting in uneven performance and potential safety risks.",
    points: [
      "Inconsistent acceleration and speed across karts",
      "Limited ability to enforce speed limits",
      "Lack of programmable control logic",
      "Difficulty adapting control behaviour for different user groups",
    ],
    summary:
      "The client required a reliable electronic control system that could deliver predictable, configurable, and safe motor performance.",
  },
  solutionArchitecture: {
    description:
      "SmartoSphere implemented a precision electronic motor control system using its GoKart Servomotor solution.",
    points: [
      "Dedicated servomotor control electronics for each kart",
      "Embedded firmware to manage motor response and speed regulation",
      "Programmable control logic aligned with track requirements",
      "Stable electronic design for continuous operation",
    ],
  },
  implementation: {
    description:
      "Deployment was carried out at the track level with a focus on minimal operational disruption.",
    points: [
      "Control units were integrated into existing kart setups",
      "Motor response parameters were calibrated and tested",
      "Safety-focused control limits were defined",
      "System behaviour was validated through live track testing",
    ],
    summary:
      "This ensured that performance consistency and safety requirements were met before full operational use.",
  },
  keyFeatures: [
    "Precision servomotor control",
    "Programmable speed and response parameters",
    "Stable, continuous electronic operation",
    "Safety-oriented control behaviour",
  ],
  outcomes: {
    description:
      "The GoKart Track Control system delivered measurable improvements in both performance and safety.",
    points: [
      "Consistent motor behaviour across all karts",
      "Improved control over speed and acceleration",
      "Enhanced safety for drivers and operators",
      "Greater flexibility in managing different track scenarios",
    ],
    summary:
      "The client achieved a more predictable and controlled racing environment, improving overall operational confidence.",
  },
  whySmartoSphere:
    "SmartoSphere was selected for its ability to engineer a custom electronic control solution rather than adapting generic controllers. The in-house development of both hardware and firmware allowed the system to be tuned precisely to the track's operational needs. The focus on real-world testing and reliability ensured a solution suitable for continuous use.",
  relatedSolutions: ["GoKart Servomotor"],
  tagline:
    "SmartoSphere Solutions LLP — Precision Control for Safe and Consistent Track Operations.",
};

const GoKartTrackControl = () => (
  <CaseStudyDetail data={data} />
);

export default GoKartTrackControl;
