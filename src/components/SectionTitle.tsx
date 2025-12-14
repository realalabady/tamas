import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
  subtitle?: string;
  title: string | ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <AnimatedSection delay={0}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            {subtitle}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
            light ? "text-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p
            className={`text-muted-foreground max-w-2xl ${
              centered ? "mx-auto" : ""
            } text-lg leading-relaxed`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.3}>
        <div className={`divider-gold mt-8 ${centered ? "mx-auto" : ""}`} />
      </AnimatedSection>
    </div>
  );
};

export default SectionTitle;
