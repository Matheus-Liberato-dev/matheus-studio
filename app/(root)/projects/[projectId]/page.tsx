import { Projects } from "@/config/projects";
import { RedirectToWork } from "./redirect-client";

export function generateStaticParams() {
  return Projects.map((p) => ({ projectId: p.id }));
}

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  return <RedirectToWork projectId={projectId} />;
}
