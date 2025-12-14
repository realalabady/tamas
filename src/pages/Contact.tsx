import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Building2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.address.title"),
      value: t("contact.address.value"),
    },
    {
      icon: Phone,
      title: t("contact.phone.title"),
      value: t("contact.phone.value"),
      href: "tel:0126680442",
    },
    {
      icon: Clock,
      title: t("contact.hours.title"),
      value: t("contact.hours.value"),
    },
    {
      icon: Building2,
      title: t("contact.location.title"),
      value: t("contact.location.value"),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/3 end-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4"
            >
              {t("contact.title")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            >
              {t("contact.subtitle")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl"
            >
              {t("contact.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="divider-gold mt-8"
            />
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <AnimatedSection key={item.title} delay={index * 0.1}>
                    <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Rating */}
              <AnimatedSection delay={0.5}>
                <div className="mt-8 p-6 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg
                        className="w-5 h-5 text-primary/40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-foreground font-semibold">4.2</span>
                    <span className="text-muted-foreground">
                      (12 {isRtl ? "مراجعة" : "reviews"})
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Map Placeholder */}
            <AnimatedSection direction="right">
              <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden border border-border">
                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {isRtl ? "خريطة الموقع" : "Location Map"}
                    </p>
                    <p className="text-sm text-muted-foreground/60 mt-2">
                      H52J+F3 Aziziyah, Jeddah
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
