import Link from "next/link";
import { Metadata } from "next";

import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

const projectDates: Record<string, string> = {
  "shajara":        "Since March 2026 — ongoing",
  "matheus-studio": "April 23, 2026 — built in an afternoon",
};

export default function WorkPage() {
  return (
    <div className="max-w-[680px] mx-auto px-10 sm:px-14 pt-20 pb-24">

      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-14">
        Work
      </p>

      <AnimatedText
        as="h1"
        delay={0.2}
        className="font-heading text-[48px] sm:text-[64px] leading-[0.95] tracking-[-0.01em] mb-16"
      >
        Projects
      </AnimatedText>

      <div className="space-y-0">
        {Projects.map((project, index) => (
          <article key={project.id}>
            {index > 0 && <hr className="border-t border-border my-16" />}

            <div>
              <p className="font-mono text-[11px] text-muted-foreground tracking-[0.05em]">
                {projectDates[project.id] ?? ""}
              </p>
              <h2 className="flex items-center justify-between mt-3 font-heading text-[40px] leading-[1.05] lg:text-[48px]">
                {project.companyName}
                <div className="flex items-center">
                  {project.githubLink && (
                    <CustomTooltip text="Source code">
                      <Link href={project.githubLink} target="_blank">
                        <Icons.gitHub className="w-5 ml-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </Link>
                    </CustomTooltip>
                  )}
                  {project.websiteLink && (
                    <CustomTooltip text="Live site">
                      <Link href={project.websiteLink} target="_blank">
                        <Icons.externalLink className="w-5 ml-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </Link>
                    </CustomTooltip>
                  )}
                </div>
              </h2>
              <ChipContainer textArr={project.category} />
            </div>

            <div className="mt-8 mb-8">
              <ProjectDescription
                paragraphs={project.descriptionDetails.paragraphs}
                bullets={project.descriptionDetails.bullets}
              />
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
