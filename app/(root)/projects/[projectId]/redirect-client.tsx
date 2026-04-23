"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RedirectToWork({ projectId }: { projectId: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/work/${projectId}`);
  }, [projectId, router]);

  return null;
}
