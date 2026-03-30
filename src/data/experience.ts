// Design: Midnight Craft — Deep navy-black (#0A0F1E), Cyan accent (#22D3EE), Syne display font
// Data file: all experience and education data loaded here

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "work" | "education" | "capstone";
  highlights: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export interface Certification {
  title: string;
  year: string;
  type: "scholarship" | "award" | "certificate";
}

export const experiences: Experience[] = [
  {
    id: "info-systems-assistant",
    role: "Information Systems Assistant",
    organization: "School of Education, Trent University",
    period: "Oct 2024 – Apr 2025",
    type: "work",
    highlights: [
      "Designed and built interactive web-based interfaces for a secure knowledge repository managing 500+ confidential records with zero compliance violations",
      "Developed automated data validation workflows using Python and SQL scripting, reducing processing time by 40%",
      "Coordinated with cross-functional teams to resolve 15 data migration issues, achieving full audit compliance",
      "Created executive-ready quality assurance reports and UI-driven dashboards for senior stakeholders",
    ],
    skills: ["SharePoint", "HTML5", "CSS3", "Python", "SQL", "Data Visualization"],
  },
  {
    id: "data-analytics-capstone",
    role: "Data Analytics Capstone — IMIX Project",
    organization: "University of Toronto",
    period: "Jan 2025 – Apr 2025",
    type: "capstone",
    highlights: [
      "Built interactive, data-driven dashboard interfaces using Power BI and Python, analyzing multi-source datasets",
      "Applied UI/UX design principles to structure complex data into clear, navigable visualizations",
      "Identified 3 key behavioral drivers adopted into client strategy",
      "Presented technical findings to cross-functional stakeholders in an Agile team environment",
    ],
    skills: ["Power BI", "Python", "Data Visualization", "Agile", "Stakeholder Communication"],
  },
  {
    id: "student-ambassador",
    role: "Student Ambassador",
    organization: "Champlain College, Trent University",
    period: "Jan 2024 – Present",
    type: "work",
    highlights: [
      "Developed and maintained web-based tools and databases to manage student records",
      "Created data visualizations and concise reports for leadership",
      "Implemented standardized protocols that reduced enrollment errors by 50%",
      "Increased event attendance by 30% through data-driven process improvements",
    ],
    skills: ["Web Tools", "Databases", "Data Visualization", "Process Improvement"],
  },
];

export const education: Education = {
  degree: "Bachelor of Science — Computer Science and Business Administration",
  institution: "Trent University",
  location: "Peterborough, ON",
  period: "Sep 2023 – Present",
  gpa: "3.3+",
  coursework: [
    "Web Development",
    "Software Engineering",
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Database Management",
    "Information Systems",
    "Python for Data Science",
    "Statistics",
  ],
};

export const certifications: Certification[] = [
  { title: "Alena Heitlinger Leadership Scholarship", year: "2025", type: "scholarship" },
  { title: "Alena Heitlinger Academic Scholarship", year: "2024", type: "scholarship" },
  { title: "Impact Microgrant Winner — Cybersecurity for Seniors", year: "2025", type: "award" },
  { title: "Certificate of Excellence, Champlain College", year: "2023–2024", type: "certificate" },
];
