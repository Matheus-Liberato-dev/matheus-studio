import Link from "next/link";

import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.id}`}
      className="group flex flex-col sm:flex-row gap-4 sm:gap-6 border border-border rounded-[var(--radius)] p-5 hover:bg-muted transition-colors"
    >
      <div className="flex-1 min-w-0 space-y-2">
        <p className="font-heading text-[18px] group-hover:text-accent-foreground transition-colors">
          {project.companyName}
        </p>
        <p className="text-[14px] text-muted-foreground leading-[1.55] line-clamp-2">
          {project.shortDescription}
        </p>
        <ChipContainer textArr={project.category} />
      </div>
      <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2 sm:flex-shrink-0">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
          {project.endDate.getFullYear()}
        </span>
        <span className="font-mono text-[11px] text-accent-foreground group-hover:underline">
          Read →
        </span>
      </div>
    </Link>
  );
}
