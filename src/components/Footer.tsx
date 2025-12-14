import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/services", label: t("nav.services") },
    { path: "/team", label: t("nav.team") },
    { path: "/quote", label: t("nav.quote") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  ST
                </span>
              </div>
              <div>
                <span className="text-foreground font-display text-lg font-semibold">
                  {isRtl ? "تماس السعودية" : "Saudi Tamas"}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 text-primary/40"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-muted-foreground ms-2">
                4.2 (12 {isRtl ? "مراجعات" : "reviews"})
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight
                      className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${
                        isRtl ? "rotate-180 group-hover:-translate-x-1" : ""
                      }`}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {t("contact.address.value")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:0126680442"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("contact.phone.value")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {t("contact.hours.value")}
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">
              {isRtl ? "ابدأ مشروعك" : "Start Your Project"}
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              {isRtl
                ? "هل أنت مستعد لبناء شيء استثنائي؟ تواصل معنا اليوم."
                : "Ready to build something exceptional? Get in touch with our team today."}
            </p>
            <Link to="/quote" className="btn-primary inline-block text-sm">
              {t("nav.quote")}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Saudi Tamas Building Company. {t("footer.rights")}
          </p>
          <p className="text-muted-foreground text-xs">
            H52J+F3 Aziziyah, Jeddah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
