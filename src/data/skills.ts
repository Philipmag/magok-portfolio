// Design: Midnight Craft — Deep navy-black (#0A0F1E), Cyan accent (#22D3EE), Syne display font
// Data file: all skills data organized by category

export interface Skill {
  name: string;
  level: "expert" | "proficient" | "familiar";
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Front-End Development",
    icon: "monitor",
    skills: [
      { name: "React", level: "expert" },
      { name: "JavaScript (ES6+)", level: "expert" },
      { name: "HTML5", level: "expert" },
      { name: "CSS3", level: "expert" },
      { name: "SASS", level: "proficient" },
      { name: "TypeScript", level: "proficient" },
      { name: "Responsive Design", level: "expert" },
      { name: "Accessibility (WCAG)", level: "proficient" },
      { name: "State Management", level: "proficient" },
      { name: "Component Architecture", level: "expert" },
    ],
  },
  {
    id: "engineering",
    label: "Programming & Tools",
    icon: "code",
    skills: [
      { name: "Git & GitHub", level: "expert" },
      { name: "Node.js", level: "proficient" },
      { name: "Python", level: "proficient" },
      { name: "SQL", level: "proficient" },
      { name: "REST APIs", level: "expert" },
      { name: "npm", level: "proficient" },
      { name: "VS Code", level: "expert" },
      { name: "JSON", level: "expert" },
    ],
  },
  {
    id: "methodology",
    label: "Methodologies & Concepts",
    icon: "layers",
    skills: [
      { name: "Agile / Scrum", level: "proficient" },
      { name: "OOP", level: "proficient" },
      { name: "Version Control", level: "expert" },
      { name: "Design Systems", level: "proficient" },
      { name: "Web Dev Best Practices", level: "expert" },
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    icon: "brain",
    skills: [
      { name: "GitHub Copilot", level: "expert" },
      { name: "Claude AI", level: "proficient" },
      { name: "Microsoft Copilot", level: "proficient" },
      { name: "Power BI", level: "proficient" },
      { name: "Data Visualization", level: "proficient" },
      { name: "KPI Reporting", level: "proficient" },
    ],
  },
];
