"use client";

import { useState } from "react";
import Link from "next/link";
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
        <h2 className="font-heading font-bold text-[22px] mb-4">Phone</h2>
        {phoneRevealed ? (
          <a
            href="tel:+61490705595"
            className="font-heading text-[22px] leading-[1.5] prose-link"
          >
            0490 705 595
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setPhoneRevealed(true)}
            className="font-heading text-[18px] text-accent-foreground hover:opacity-70 transition-opacity"
          >
            Show number →
          </button>
        )}
      </div>

      <hr className="border-t border-[var(--rule)] my-10" />

      <div>
        <h2 className="font-heading font-bold text-[22px] mb-6">Links</h2>
        <ul className="mn-linklist">
          {links.map((item) => (
            <li key={item.path}>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="mn-slashpath"
              >
                {item.path}
              </Link>
              <span className="mn-colon">:</span>
              <span className="mn-linkdesc">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
