import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "shajara",
    companyName: "Shajara",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Independent R&D project: building a retrieval-augmented system that gives LLMs access to curated source material, with custom web interfaces for interacting with guided LLM reasoning.",
    websiteLink: "https://shajara.au",
    techStack: ["Python", "Next.js", "React", "Typescript", "PostgreSQL"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-12-01"),
    companyLogoImg: "/projects/shajara/logo.png",
    pagesInfoArr: [
      {
        title: "Data Pipelines",
        description:
          "Built multiple pipelines for downloading, transcribing, and processing large text corpora.",
        imgArr: ["/logo.png"],
      },
      {
        title: "RAG Interface",
        description:
          "Prototype web interface with custom LLM chat functionality grounded in retrieved source material.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Shajara is my primary independent R&D project exploring how large language models can be given reliable access to curated knowledge sources.",
        "I built multiple data pipelines from scratch for downloading, transcribing, and processing large text corpora, and developed a retrieval-augmented system to ground LLM responses in specific source material.",
        "The project includes prototype web interfaces with custom LLM chat functionality, and active research into techniques for steering and guiding LLM reasoning processes. All scope, architecture, and technical decisions are managed independently.",
      ],
      bullets: [
        "Built data pipelines for downloading, transcribing, and processing large text corpora.",
        "Developed a retrieval-augmented generation system with curated source material.",
        "Researched techniques for steering and guiding LLM reasoning processes.",
        "Built and iterated on prototype web interfaces with custom LLM chat functionality.",
        "Acquired practical working knowledge in Python, embeddings, vector databases, and AI APIs.",
        "Managing all scope, direction, architecture, and technical decisions independently.",
      ],
    },
  },
  {
    id: "matheus-studio",
    companyName: "Matheus Studio",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "This portfolio and consulting site — built with Next.js, showcasing web development and AI projects, and serving as a home for client enquiries.",
    websiteLink: "https://matheus.studio",
    githubLink: "https://github.com/Matheus-Liberato-dev/matheus-studio",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Portfolio & Landing",
        description:
          "Clean, minimal landing page with sections for projects, skills, and contact.",
        imgArr: ["/profile-img.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Matheus Studio is my personal portfolio and consulting site, built to showcase my work in AI development and web consulting.",
        "It serves as a home for client enquiries, project showcases, and a demonstration of the kind of clean, performant web work I deliver for individuals and small businesses.",
      ],
      bullets: [
        "Built with Next.js 15, TypeScript, and Tailwind CSS for a fast, responsive experience.",
        "Optimized for SEO and performance with server-side rendering and clean metadata.",
        "Minimal, themeable design system with smooth Framer Motion animations.",
        "Deployed on Vercel with continuous delivery from GitHub.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
