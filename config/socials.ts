import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Matheus-Liberato-dev",
    icon: Icons.gitHub,
    link: "https://github.com/Matheus-Liberato-dev",
  },
  {
    name: "LinkedIn",
    username: "Matheus Liberato",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/matheus-liberato",
  },
  {
    name: "Gmail",
    username: "mat.liberato",
    icon: Icons.gmail,
    link: "mailto:mat.liberato@gmail.com",
  },
];
