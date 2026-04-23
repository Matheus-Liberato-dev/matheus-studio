import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Matheus Liberato - AI Developer & Web Consultant",
      description:
        "Matheus Liberato — AI Developer & Web Consultant based in Sydney. I help individuals and small businesses build software, websites, and learn to use AI.",
    },
  },
  projects: {
    title: "Projects",
    description: "A selection of software and AI projects I've built.",
    metadata: {
      title: "Projects | Matheus Liberato",
      description:
        "Projects by Matheus Liberato — AI tools, web applications, and LLM research.",
    },
  },
  about: {
    title: "About",
    description: "Background, skills, and what drives my work.",
    metadata: {
      title: "About | Matheus Liberato",
      description:
        "About Matheus Liberato — multidisciplinary background in engineering, psychology, and applied sciences. Currently researching LLMs and building for small businesses.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and build something together.",
    metadata: {
      title: "Contact | Matheus Liberato",
      description:
        "Get in touch with Matheus Liberato for web development, AI tools, or one-on-one AI guidance.",
    },
  },
};
