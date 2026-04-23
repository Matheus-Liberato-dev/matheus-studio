"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

import { AnimatedText } from "@/components/common/animated-text";

const links = [
  { path: "/about",    label: "longer bio, background, how I got here",       href: "/about",                                        external: false },
  { path: "/work",     label: "selected client and research projects",          href: "/work",                                         external: false },
  { path: "/services", label: "websites, tools, AI coaching, 1:1 sessions",    href: "/services",                                     external: false },
  { path: "/shajara",  label: "current R&D project — shajara.au",              href: "https://shajara.au",                            external: true  },
  { path: "/github",   label: "Matheus-Liberato-dev",                         href: "https://github.com/Matheus-Liberato-dev",       external: true  },
  { path: "/email",    label: "mat.liberato@protonmail.com",                  href: "mailto:mat.liberato@protonmail.com",                 external: false },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          social: form.subject,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-[680px] mx-auto px-10 sm:px-14 pt-20 pb-24">

      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-14">
        Contact
      </p>

      <AnimatedText
        as="h1"
        delay={0.2}
        className="font-heading text-[48px] sm:text-[64px] leading-[0.95] tracking-[-0.01em] mb-14"
      >
        Get in touch
      </AnimatedText>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full bg-transparent border border-border rounded-[var(--radius)] px-4 py-2.5 text-[15px] outline-none focus:border-foreground transition-colors"
            />
          </div>
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full bg-transparent border border-border rounded-[var(--radius)] px-4 py-2.5 text-[15px] outline-none focus:border-foreground transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-2">
            Subject
          </label>
          <input
            type="text"
            required
            value={form.subject}
            onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
            className="w-full bg-transparent border border-border rounded-[var(--radius)] px-4 py-2.5 text-[15px] outline-none focus:border-foreground transition-colors"
          />
        </div>

        <div>
          <label className="block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-2">
            Message
          </label>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="w-full bg-transparent border border-border rounded-[var(--radius)] px-4 py-2.5 text-[15px] outline-none focus:border-foreground transition-colors resize-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center font-sans text-[13px] font-medium tracking-[0.02em] px-5 py-2.5 bg-primary text-primary-foreground rounded-[var(--radius)] transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send →"}
          </button>
          {status === "sent" && (
            <p className="font-mono text-[12px] text-muted-foreground">Message sent.</p>
          )}
          {status === "error" && (
            <p className="font-mono text-[12px] text-destructive">Something went wrong. Try again.</p>
          )}
        </div>
      </form>

      <hr className="border-t border-[var(--rule)] mt-12 mb-10" />

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-3">
          Phone
        </p>
        {phoneRevealed ? (
          <a
            href="tel:+61490705595"
            className="font-heading text-[28px] sm:text-[32px] leading-[1.1] hover:opacity-70 transition-opacity"
          >
            0490 705 595
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setPhoneRevealed(true)}
            className="inline-flex items-center gap-2 font-sans text-[13px] font-medium tracking-[0.02em] px-5 py-2.5 border border-input bg-background rounded-[var(--radius)] hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Phone size={14} strokeWidth={1.75} />
            Show number
          </button>
        )}
      </div>

      <hr className="border-t border-[var(--rule)] my-10" />

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-6">
          /links
        </p>
        <nav className="space-y-0">
          {links.map((item) => (
            <div
              key={item.path}
              className="flex items-baseline gap-5 border-b border-dashed border-border py-3"
            >
              <span className="font-mono text-[11px] text-accent-foreground tracking-[0.05em] flex-shrink-0 w-24">
                {item.path}
              </span>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="prose-link font-heading text-[15px] text-muted-foreground"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>

    </div>
  );
}
