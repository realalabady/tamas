import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Quote = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const projectTypes = [
    { value: "residential", label: t("quote.form.projectTypes.residential") },
    { value: "commercial", label: t("quote.form.projectTypes.commercial") },
    { value: "educational", label: t("quote.form.projectTypes.educational") },
    {
      value: "infrastructure",
      label: t("quote.form.projectTypes.infrastructure"),
    },
    { value: "industrial", label: t("quote.form.projectTypes.industrial") },
    { value: "other", label: t("quote.form.projectTypes.other") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 end-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4"
            >
              {t("quote.title")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            >
              {t("quote.subtitle")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl"
            >
              {t("quote.description")}
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

      {/* Form Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <AnimatedSection>
                <div className="text-center py-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                  </motion.div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {t("quote.success")}
                  </h2>
                  <p className="text-muted-foreground">
                    {isRtl
                      ? "فريقنا سيقوم بمراجعة طلبك والتواصل معك قريباً."
                      : "Our team will review your request and get back to you soon."}
                  </p>
                </div>
              </AnimatedSection>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("quote.form.name")} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder={
                        isRtl ? "أدخل اسمك الكامل" : "Enter your full name"
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("quote.form.company")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder={
                        isRtl
                          ? "اسم الشركة (اختياري)"
                          : "Company name (optional)"
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("quote.form.email")} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder={
                        isRtl ? "بريدك الإلكتروني" : "your@email.com"
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("quote.form.phone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder={isRtl ? "رقم الهاتف" : "+966 XXX XXX XXXX"}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("quote.form.projectType")} *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">
                      {isRtl ? "اختر نوع المشروع" : "Select project type"}
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("quote.form.message")} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder={
                      isRtl
                        ? "أخبرنا عن مشروعك والمتطلبات..."
                        : "Tell us about your project and requirements..."
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="animate-pulse">
                      {isRtl ? "جاري الإرسال..." : "Sending..."}
                    </span>
                  ) : (
                    <>
                      {t("quote.form.submit")}
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
