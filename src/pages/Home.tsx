import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Award,
  Users,
  ChevronDown,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const stats = [
    { value: "50+", label: t("hero.stats.projects"), icon: Building2 },
    { value: "15+", label: t("hero.stats.years"), icon: Award },
    { value: "4.2", label: t("hero.stats.rating"), icon: Users },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm font-medium tracking-[0.3em] uppercase mb-6"
            >
              {t("hero.subtitle")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight"
            >
              {t("hero.title")}
              <br />
              <span className="text-gradient-gold">
                {t("hero.titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/quote"
                className="btn-primary flex items-center gap-2 group"
              >
                {t("hero.cta")}
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="btn-outline flex items-center gap-2"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/30"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom--1 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg bg-secondary overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl opacity-20">🏛️</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -end-6 w-32 h-32 bg-primary/10 rounded-lg blur-2xl" />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.1}>
                <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
                  {t("about.title")}
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  {t("about.subtitle")}
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {t("about.description")}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-medium group"
                >
                  {isRtl ? "اكتشف المزيد" : "Learn More"}
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle={t("services.title")}
            title={t("services.subtitle")}
            description={t("services.description")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              {isRtl ? "عرض جميع الخدمات" : "View All Services"}
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle={t("projects.title")}
            title={t("projects.subtitle")}
            description={t("projects.description")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              {isRtl ? "عرض جميع المشاريع" : "View All Projects"}
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 end-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                {isRtl
                  ? "هل أنت مستعد لبدء مشروعك؟"
                  : "Ready to Start Your Project?"}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-muted-foreground text-lg mb-8">
                {isRtl
                  ? "تواصل مع فريقنا اليوم واحصل على عرض سعر مخصص لمتطلبات مشروعك."
                  : "Get in touch with our team today and receive a customized quote for your project requirements."}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link
                to="/quote"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                {t("nav.quote")}
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
