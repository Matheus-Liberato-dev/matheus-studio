import { Metadata } from "next";
import Link from "next/link";

import { AnimatedText } from "@/components/common/animated-text";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.about.metadata.title,
  description: pagesConfig.about.metadata.description,
};

export default function AboutPage() {
  return (
    <div className="max-w-[680px] mx-auto px-10 sm:px-14 pt-20 pb-24">

      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-14">
        About
      </p>

      <AnimatedText
        as="h1"
        delay={0.2}
        className="font-heading text-[48px] sm:text-[64px] leading-[0.95] tracking-[-0.01em] mb-12"
      >
        
      </AnimatedText>

      <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.7]">
        <p>
          I&apos;m <strong>Matheus</strong>. Nice to meet you.
        </p>

        <p>
          I have a multidisciplinary background spanning engineering, psychology, and applied sciences. 
          I am currently conducting independent research and development in large language models.
          I am completing a Certificate IV in web development at TAFE NSW. 
          I am based near Carlingford, Sydney. My services are available in person locally or remotely.
        </p>

      <AnimatedText
        as="h2"
        delay={0.2}
        className="font-heading text-[32px] sm:text-[32px] leading-[0.95] tracking-[-0.01em] mb-12"
      >
        
      </AnimatedText>
      <h2>
        
      </h2>
        <p>
          I have nearly seven years experience of private tutoring in mathematics, physics, and chemistry. 
          I have worked with students from primary school through to university level, 
          mainly one-on-one but sometimes in small group settings.
          I designed and managed each student's study approach; I was not just focused on the individual session.
          I helped students understand difficult concepts by explaining clearly, and I helped them build independent problem-solving ability.
          I built genuine relationships with some students and their families over extended periods.
          I organised and managed all client relationships independently, not through an agency.
        </p>


      </div>

    </div>
  );
}
