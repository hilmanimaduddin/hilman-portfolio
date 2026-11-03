export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend Development",
    items: [
      "Next.js",
      "React.js",
      "Vite",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & API Integration",
    items: [
      "Node.js",
      "Express.js",
      "Go (Golang)",
      "PHP",
      "Java",
      "RESTful API Integration",
    ],
  },
  {
    category: "Database & ORM",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle Database",
      "Prisma",
      "TypeORM",
      "SQL",
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      "Git",
      "GitHub",
      "Jira",
      "ClickUp",
      "Agile / Scrum Methodology",
    ],
  },
];
