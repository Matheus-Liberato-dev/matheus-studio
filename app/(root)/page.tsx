import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { AnimatedText } from "@/components/common/animated-text";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    jobTitle: "AI Developer & Web Consultant",
    sameAs: [siteConfig.links.github],
  };

  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-[680px] mx-auto px-10 sm:px-14 pt-20 pb-24">

        {/* Index label */}
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-14">
          Index / 2026
        </p>

        {/* Hero */}
        <AnimatedText
          as="h1"
          delay={0.2}
          className="font-heading text-[56px] sm:text-[80px] lg:text-[96px] leading-[0.95] tracking-[-0.01em] mb-0"
        >
          Matheus
        </AnimatedText>
        <h2 className="font-heading italic text-[56px] sm:text-[80px] lg:text-[96px] leading-[0.95] tracking-[-0.01em] mb-14">
          Liberato<span className="text-accent-foreground">.</span>
        </h2>

        {/* Lead */}
        <p className="text-[20px] sm:text-[22px] font-light text-muted-foreground leading-[1.45] mb-8">
          I am hoping to build websites, web tools, apps and AI workflows for individuals and small businesses. 
          I am based near Carlingford, Sydney and I offer my sercvies in person and remotely across Australia.
        </p>

        {/* Body prose */}
        <div className="space-y-5 text-[17px] sm:text-[18px] leading-[1.7]">
          
          <p>
            My background is unusual for a developer — psychology at Macquarie,
            six years tutoring high-school maths and physics, a growing
            independent R&amp;D project with{" "}
            <a
              href="https://shajara.au"
              className="prose-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              large language models
            </a>
            
          </p>
          <p>
            I work with{" "}
            <a
              href="https://claude.ai"
              className="prose-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude
            </a>{" "}
            and Claude Code every day. It is a transformative technology. 
            Part of what I offer is helping others learn how to wield it effectively.
          </p>
        </div>

        <hr className="border-t border-[var(--rule)] my-8" />

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-[13px] font-medium tracking-[0.02em] px-5 py-2.5 bg-primary text-primary-foreground rounded-[var(--radius)] transition-opacity hover:opacity-90"
          >
            Get in touch →
          </Link>
          
        </div>

      </div>
    </>
  );
}
