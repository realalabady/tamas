import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/team";
import { Building2, User } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border card-hover p-6 text-center">
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center border-2 border-border group-hover:border-primary/50 transition-colors duration-300">
          <User className="w-10 h-10 text-muted-foreground" />
        </div>

        {/* Name */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
          {isRtl ? member.nameAr : member.nameEn}
        </h3>

        {/* Role */}
        <p className="text-primary text-sm font-medium mb-4">
          {isRtl ? member.roleAr : member.roleEn}
        </p>

        {/* Office */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Building2 className="w-4 h-4" />
          <span>{isRtl ? member.officeAr : member.officeEn}</span>
        </div>

        {/* Decorative line */}
        <div className="w-12 h-px bg-primary/30 mx-auto mt-6 group-hover:w-24 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default TeamCard;
