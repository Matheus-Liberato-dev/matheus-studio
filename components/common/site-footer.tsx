import * as React from "react";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={className}>
      <div className="border-t border-border px-10 sm:px-14 py-6 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          matheus.studio
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          Sydney · 2026
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          © Matheus Liberato
        </span>
      </div>
    </footer>
  );
}
