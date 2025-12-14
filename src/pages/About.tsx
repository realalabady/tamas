import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Target,
  Shield,
  Lightbulb,
  HardHat,
  GraduationCap,
  Building2,
  TrainFront,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const values = [
    { icon: Target, key: "excellence" },
    { icon: Shield, key: "integrity" },
    { icon: Lightbulb, key: "innovation" },
    { icon: HardHat, key: "safety" },
  ];

  const experience = [
    { icon: GraduationCap, key: "educational" },
    { icon: Building2, key: "commercial" },
    { icon: TrainFront, key: "transport" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4"
            >
              {t("about.title")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            >
              {t("about.subtitle")}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="divider-gold"
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-square rounded-lg bg-secondary overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-9xl opacity-20">🏗️</span>
                  </div>
                </div>
                <div className="absolute -bottom-8 -end-8 w-48 h-48 border-2 border-primary/30 rounded-lg" />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {t("about.description")}
                </p>
              </AnimatedSection>

              {/* Vision */}
              <AnimatedSection delay={0.2}>
                <div className="bg-background p-6 rounded-lg border border-border mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {t("about.vision.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("about.vision.description")}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle={t("about.values.title")}
            title={isRtl ? "ما نؤمن به" : "What We Believe In"}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.key} delay={index * 0.1}>
                <div className="bg-card p-8 rounded-lg border border-border text-center card-hover h-full">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {t(`about.values.items.${value.key}`)}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle={t("about.experience.title")}
            title={isRtl ? "قطاعاتنا المتخصصة" : "Our Specialized Sectors"}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {experience.map((item, index) => (
              <AnimatedSection key={item.key} delay={index * 0.15}>
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-lg bg-secondary overflow-hidden mb-6">
                    <div className="w-full h-full flex items-center justify-center">
                      <item.icon className="w-20 h-20 text-primary/30 group-hover:text-primary/50 transition-colors duration-500" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                    {t(`about.experience.${item.key}`)}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
