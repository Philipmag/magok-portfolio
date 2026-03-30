// Design: Midnight Craft — Deep navy-black (#0A0F1E), Cyan accent (#22D3EE), Syne display font
// Data file: all project data loaded here, not hardcoded in components

export interface Project {
  id: string;
  title: string;
  period: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  category: "frontend" | "fullstack" | "data" | "platform";
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "interactive-dashboard",
    title: "Interactive Dashboard Web App",
    period: "Sep 2025 – Dec 2025",
    summary: "A real-time analytics dashboard built with React and REST APIs for exploring data through interactive charts and filterable tables.",
    problem: "Teams needed a way to visualize and explore complex analytics data without relying on static reports or manual spreadsheets.",
    solution: "Built a front-end web application using React and JavaScript to visualize analytics data through interactive charts and filterable tables, with RESTful API integration for real-time data fetching.",
    impact: [
      "Integrated RESTful APIs to fetch and display real-time data with loading states and error handling",
      "Applied SASS for modular and maintainable styling with variables, mixins, and responsive breakpoints",
      "Leveraged AI-assisted development tools (GitHub Copilot, Claude) to accelerate component development",
    ],
    techStack: ["React", "JavaScript", "SASS", "REST APIs", "GitHub Copilot"],
    category: "frontend",
    githubUrl: "https://github.com/philipmag",
    liveUrl: "#",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/110291972/6FpJWqmAcyACmMchXZeDxb/project-dashboard-WDH9ghi5dabGsZ6ZnARZB8.webp",
    featured: true,
  },
  {
    id: "cybersecurity-platform",
    title: "Cybersecurity Awareness Platform",
    period: "Jan 2025 – Apr 2025",
    summary: "An accessible web-based educational platform for the Cybersecurity for Seniors initiative, designed for elderly users with varying technical abilities.",
    problem: "Elderly users lacked accessible, easy-to-understand resources for learning cybersecurity best practices online.",
    solution: "Developed a web-based educational platform using HTML5, CSS3, and JavaScript with WCAG-compliant UI components specifically designed for seniors.",
    impact: [
      "Created accessible UI components following WCAG guidelines to serve elderly users with varying technical abilities",
      "Implemented responsive design patterns ensuring consistent experience across all device sizes",
      "Collaborated with a cross-functional team using Agile methodology and Git-based workflows",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "WCAG", "Agile", "Git"],
    category: "platform",
    githubUrl: "https://github.com/philipmag",
    liveUrl: "#",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/110291972/6FpJWqmAcyACmMchXZeDxb/project-cybersec-ZsTKWESm6bmV5Z6Upd9BuH.webp",
    featured: true,
    badge: "Impact Microgrant Winner 2025",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    period: "Jan 2026 – Present",
    summary: "A responsive single-page portfolio website built with React to showcase projects, skills, and professional experience.",
    problem: "Needed a professional online presence that accurately represents technical skills and projects to potential employers and collaborators.",
    solution: "Designed and developed a responsive single-page portfolio using React, JavaScript, HTML5, and CSS3 with component-based architecture and full accessibility compliance.",
    impact: [
      "Implemented component-based architecture with reusable UI components and React state management",
      "Ensured full accessibility compliance (WCAG 2.1) across mobile, tablet, and desktop viewports",
      "Utilized Git and GitHub for version control with clean commit history and branching strategy",
    ],
    techStack: ["React", "TypeScript", "CSS3", "WCAG 2.1", "Git", "Vite"],
    category: "frontend",
    githubUrl: "https://github.com/philipmag",
    liveUrl: "#",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/110291972/6FpJWqmAcyACmMchXZeDxb/project-portfolio-oKchSrzWrjPSr6MC5rw2kf.webp",
    featured: true,
  },
  {
    id: "imix-capstone",
    title: "IMIX Data Analytics Capstone",
    period: "Jan 2025 – Apr 2025",
    summary: "Interactive data-driven dashboard interfaces built with Power BI and Python, analyzing multi-source datasets and delivering visual analytics to senior audiences.",
    problem: "IMIX needed to make sense of complex, multi-source datasets and present actionable insights to senior stakeholders in a clear, navigable format.",
    solution: "Built interactive dashboard interfaces using Power BI and Python, applying UI/UX design principles to structure complex data into clear visualizations.",
    impact: [
      "Identified 3 key behavioral drivers that were adopted into client strategy",
      "Applied UI/UX design principles to structure complex data into clear, navigable visualizations",
      "Presented technical findings to cross-functional stakeholders in an Agile team environment",
    ],
    techStack: ["Power BI", "Python", "Data Visualization", "Agile"],
    category: "data",
    githubUrl: "https://github.com/philipmag",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: false,
  },
  {
    id: "knowledge-repository",
    title: "Knowledge Repository Interface",
    period: "Oct 2024 – Apr 2025",
    summary: "Interactive web-based interfaces for a secure knowledge repository managing 500+ confidential records using SharePoint and front-end web technologies.",
    problem: "The School of Education needed a secure, accessible interface for managing 500+ confidential records with full audit compliance.",
    solution: "Designed and built interactive web-based interfaces for a secure knowledge repository, with automated data validation workflows using Python and SQL scripting.",
    impact: [
      "Reduced processing time by 40% through automated data validation workflows",
      "Achieved full audit compliance with zero compliance violations across 500+ records",
      "Resolved 15 data migration issues through collaborative cross-functional problem-solving",
    ],
    techStack: ["SharePoint", "HTML5", "CSS3", "Python", "SQL"],
    category: "fullstack",
    githubUrl: "https://github.com/philipmag",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    featured: false,
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "platform", label: "Platform" },
  { id: "data", label: "Data & Analytics" },
  { id: "fullstack", label: "Full Stack" },
];
