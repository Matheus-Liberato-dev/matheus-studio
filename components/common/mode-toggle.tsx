"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="font-mono text-[14px] text-muted-foreground w-5 inline-block" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="font-mono text-[14px] text-muted-foreground hover:text-foreground transition-colors"
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
