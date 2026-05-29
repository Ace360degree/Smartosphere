-- Execute these queries in your phpMyAdmin SQL tab to insert the remaining 3 case studies

USE smartosphere;

-- 1. Biomedical Monitoring System
INSERT INTO case_studies (title, slug, industry, solutions_used, deployment_type, client_background, challenge, solution_architecture, implementation, key_features, outcomes, why_smarto_sphere, related_solutions, tagline) VALUES (
    'Biomedical Monitoring System',
    'biomedical-monitoring-system',
    'Healthcare & Biomedical',
    '["BioMed", "MHITS"]',
    'Pilot to Controlled Deployment',
    'The client is an organisation operating in a healthcare and biomedical monitoring environment, where continuous observation of human physiological parameters was required. The operating setup involved controlled conditions with a need for reliable data capture, minimal manual intervention, and structured access to monitoring information. Due to the sensitive nature of the environment, patient safety, data integrity, and system reliability were key priorities.',
    '{"description":"The client relied on manual and semi-automated monitoring methods, which made it difficult to maintain continuous visibility of biomedical parameters. Data was often collected intermittently, increasing the risk of delayed response to abnormal conditions.","points":["Lack of real-time monitoring and alerts","Dependence on manual observation","Limited historical data for analysis and review","Difficulty adapting existing systems to specific monitoring requirements"],"summary":"The client required a system that could provide continuous, accurate, and secure biomedical monitoring without disrupting existing workflows."}',
    '{"description":"SmartoSphere designed a custom biomedical monitoring system using its BioMed and MHITS platforms.","points":["Biomedical sensors selected based on monitoring requirements","Custom electronic hardware for stable signal acquisition","Embedded firmware to manage data capture and reliability","Secure data transmission to a central platform","Monitoring dashboards for real-time visibility and historical analysis"]}',
    '{"description":"The deployment was carried out in phases, beginning with a controlled pilot to validate system performance and data accuracy.","points":["Sensors and devices were installed with minimal disruption","Thresholds and alerts were configured in consultation with stakeholders","System behaviour was tested under real operating conditions","Monitoring dashboards were fine-tuned for clarity and usability"],"summary":"This phased approach ensured a smooth transition from pilot to operational use."}',
    '["Continuous biomedical data acquisition","Real-time threshold-based alerts","Secure data transmission and storage","Centralised monitoring dashboard","Historical data logging and reporting"]',
    '{"description":"The biomedical monitoring system delivered measurable operational improvements.","points":["Improved consistency in biomedical data capture","Faster response to abnormal conditions","Reduced dependency on manual observation","Structured access to historical monitoring data"],"summary":"The client gained confidence in monitoring continuity and system reliability, supporting better operational and safety outcomes."}',
    'The client chose SmartoSphere for its ability to deliver a custom-engineered solution rather than a generic monitoring device. The in-house capability to design hardware, firmware, and software as a unified system enabled better adaptability and long-term reliability. SmartoSphere''s phased deployment approach and focus on real-world validation further strengthened trust in the solution.',
    '["BioMed", "MHITS"]',
    'SmartoSphere Solutions LLP — Engineering Reliable Monitoring for Biomedical Environments.'
);

-- 2. GoKart Track Control System
INSERT INTO case_studies (title, slug, industry, solutions_used, deployment_type, client_background, challenge, solution_architecture, implementation, key_features, outcomes, why_smarto_sphere, related_solutions, tagline) VALUES (
    'GoKart Track Control System',
    'gokart-track-control-system',
    'Motorsport & Recreational Facilities',
    '["GoKart Servomotor"]',
    'Track-Level Operational Deployment',
    'The client operates a GoKart racing and recreational track catering to both training and general users. The facility required consistent vehicle performance, controlled speed behaviour, and a safe driving experience across all karts on the track. As the track usage increased, maintaining uniform control and ensuring safety through manual or basic electronic systems became increasingly challenging.',
    '{"description":"The client faced issues with inconsistent motor response and limited control over speed regulation across vehicles. Existing control mechanisms did not allow fine-grained adjustment of motor behaviour, resulting in uneven performance and potential safety risks.","points":["Inconsistent acceleration and speed across karts","Limited ability to enforce speed limits","Lack of programmable control logic","Difficulty adapting control behaviour for different user groups"],"summary":"The client required a reliable electronic control system that could deliver predictable, configurable, and safe motor performance."}',
    '{"description":"SmartoSphere implemented a precision electronic motor control system using its GoKart Servomotor solution.","points":["Dedicated servomotor control electronics for each kart","Embedded firmware to manage motor response and speed regulation","Programmable control logic aligned with track requirements","Stable electronic design for continuous operation"]}',
    '{"description":"Deployment was carried out at the track level with a focus on minimal operational disruption.","points":["Control units were integrated into existing kart setups","Motor response parameters were calibrated and tested","Safety-focused control limits were defined","System behaviour was validated through live track testing"],"summary":"This ensured that performance consistency and safety requirements were met before full operational use."}',
    '["Precision servomotor control","Programmable speed and response parameters","Stable, continuous electronic operation","Safety-oriented control behaviour"]',
    '{"description":"The GoKart Track Control system delivered measurable improvements in both performance and safety.","points":["Consistent motor behaviour across all karts","Improved control over speed and acceleration","Enhanced safety for drivers and operators","Greater flexibility in managing different track scenarios"],"summary":"The client achieved a more predictable and controlled racing environment, improving overall operational confidence."}',
    'SmartoSphere was selected for its ability to engineer a custom electronic control solution rather than adapting generic controllers. The in-house development of both hardware and firmware allowed the system to be tuned precisely to the track''s operational needs. The focus on real-world testing and reliability ensured a solution suitable for continuous use.',
    '["GoKart Servomotor"]',
    'SmartoSphere Solutions LLP — Precision Control for Safe and Consistent Track Operations.'
);

-- 3. Radiation Safety Monitoring System
INSERT INTO case_studies (title, slug, industry, solutions_used, deployment_type, client_background, challenge, solution_architecture, implementation, key_features, outcomes, why_smarto_sphere, related_solutions, tagline) VALUES (
    'Radiation Safety Monitoring System',
    'radiation-safety-monitoring-system',
    'Safety & Regulated Environments',
    '["Radiation Electronics"]',
    'Controlled Environment Deployment',
    'The client operates in a regulated environment where radiation exposure must be continuously monitored to ensure safety and compliance. The setup involved controlled areas where accurate measurement, reliable data logging, and timely alerts were critical to protect personnel and maintain operational standards. Due to the nature of the environment, system reliability and data integrity were key requirements.',
    '{"description":"The client relied on standalone or manual radiation measurement methods, which provided limited visibility and delayed awareness of abnormal exposure levels. Data was often reviewed retrospectively, making it difficult to respond proactively to potential safety risks.","points":["Lack of continuous radiation monitoring","No centralised visibility of radiation levels","Limited alerting for threshold breaches","Difficulty maintaining structured historical records for compliance"],"summary":"The client required a solution that could deliver continuous monitoring, centralised oversight, and reliable reporting."}',
    '{"description":"SmartoSphere designed a radiation monitoring system using its Radiation Electronics platform.","points":["Radiation sensors selected based on the operating environment","Custom electronic hardware for stable data acquisition","Embedded firmware for continuous measurement and reliability","Secure data transmission to a central monitoring platform","Dashboards and reports for real-time visibility and historical analysis"]}',
    '{"description":"The deployment was executed in a controlled manner to ensure safety and accuracy.","points":["Sensors were installed and calibrated according to operational standards","Alert thresholds were configured based on acceptable exposure limits","Continuous monitoring was validated under real operating conditions","Reporting views were aligned with compliance and audit needs"],"summary":"This approach ensured that the system met both operational and safety requirements."}',
    '["Continuous radiation level measurement","Threshold-based alerts and notifications","Secure data logging and storage","Centralised monitoring dashboard","Historical reporting for audits and reviews"]',
    '{"description":"The radiation safety monitoring system delivered clear safety and operational benefits.","points":["Continuous visibility of radiation exposure levels","Faster response to abnormal conditions","Improved safety oversight for personnel","Structured historical data to support compliance and audits"],"summary":"The client gained confidence in both safety monitoring and regulatory readiness."}',
    'The client chose SmartoSphere for its ability to deliver a custom-engineered radiation monitoring solution rather than a generic measurement device. The integrated approach—covering hardware, firmware, and software—ensured reliable performance and adaptability to specific safety requirements. SmartoSphere''s emphasis on validation and long-term reliability was critical for deployment in a regulated environment.',
    '["Radiation Electronics"]',
    'SmartoSphere Solutions LLP — Engineering Safety Through Reliable Monitoring.'
);
