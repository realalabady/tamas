import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border card-hover">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <span className="text-6xl opacity-30">🏗️</span>
          </div>
          {/* Sector Badge */}
          <div className="absolute top-4 start-4 z-20">
            <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
              {isRtl ? project.sectorLabelAr : project.sectorLabelEn}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {isRtl ? project.titleAr : project.titleEn}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {isRtl ? project.descriptionAr : project.descriptionEn}
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{isRtl ? project.locationAr : project.location}</span>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
