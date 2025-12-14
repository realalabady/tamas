import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Service } from "@/data/services";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { t, i18n } = useTranslation();
  const Icon: LucideIcon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border card-hover p-8 h-full">
        {/* Icon */}
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {t(`services.items.${service.translationKey}.title`)}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t(`services.items.${service.translationKey}.description`)}
        </p>

        {/* Decorative corner */}
        <div className="absolute top-0 end-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
