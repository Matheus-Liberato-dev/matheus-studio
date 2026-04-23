import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Services | Matheus Liberato",
  description:
    "Websites, web tools, AI coaching, and one-on-one sessions. Matheus Liberato — AI Developer & Web Consultant, Sydney.",
};

const services = [
  {
    title: "Websites",
    prose:
      "I design and build websites for individuals, sole traders, and small businesses. In-person sessions available across Sydney — I come to you with a laptop.",
    bullets: [
      "Modified from proven templates or built from scratch",
      "You leave knowing how to manage your own site",
      "No agency prices, no technical jargon",
    ],
  },
  {
    title: "Web Tools",
    prose:
      "Custom web-based tools built around a specific workflow or problem. I use AI-assisted development to build efficiently and keep costs reasonable.",
    bullets: [
      "Internal utilities, calculators, dashboards",
      "AI-integrated tools — chat interfaces, document processors",
      "iOS apps for simple use cases",
    ],
  },
  {
    title: "AI Coaching",
    prose:
      "One-on-one sessions teaching you how to use AI tools practically. Draws directly from six years of one-on-one teaching experience.",
    bullets: [
      "Claude, ChatGPT, and others relevant to your work",
      "Structured around your actual work, not generic examples",
      "You leave with practical skills, not just theoretical awareness",
    ],
  },
  {
    title: "Maintenance & Handoff",
    prose:
      "Every build includes handoff sessions — you learn to run it yourself. I don't create dependency; my goal is your independence.",
    bullets: [
      "Ongoing support for updates, fixes, and changes",
      "Straightforward communication, no jargon",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-[680px] mx-auto px-10 sm:px-14 pt-20 pb-24">

      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-14">
        Services
      </p>

      <div className="space-y-0">
        {services.map((s, index) => (
          <section key={s.title}>
            {index > 0 && <hr className="border-t border-[var(--rule)] my-10" />}
            <h2 className="font-heading text-[40px] leading-[1.05] lg:text-[48px] mb-8">
              {s.title}
            </h2>
            <p className="text-[17px] sm:text-[18px] leading-[1.7] mb-6">
              {s.prose}
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-muted-foreground">
              {s.bullets.map((bullet, i) => (
                <li key={i} className="text-[17px] sm:text-[18px] leading-[1.7]">
                  {bullet}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <hr className="border-t border-[var(--rule)] mt-10 mb-10" />
      <Link
        href="/contact"
        className="inline-flex items-center font-sans text-[13px] font-medium tracking-[0.02em] px-5 py-2.5 bg-primary text-primary-foreground rounded-[var(--radius)] transition-opacity hover:opacity-90"
      >
        Get in touch →
      </Link>

    </div>
  );
}
