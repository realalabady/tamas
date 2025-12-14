export interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  sector: "educational" | "commercial" | "transport";
  sectorLabelEn: string;
  sectorLabelAr: string;
  location: string;
  locationAr: string;
  image: string;
  descriptionEn: string;
  descriptionAr: string;
}

export const projects: Project[] = [
  {
    id: "private-school-al-salamah",
    titleEn: "Private School Buildings at Al Salamah",
    titleAr: "مباني المدرسة الخاصة في السلامة",
    sector: "educational",
    sectorLabelEn: "Educational",
    sectorLabelAr: "تعليمي",
    location: "Jeddah, Saudi Arabia",
    locationAr: "جدة، المملكة العربية السعودية",
    image: "/projects/school.jpg",
    descriptionEn:
      "State-of-the-art educational facility designed to foster learning excellence with modern amenities and sustainable architecture.",
    descriptionAr:
      "منشأة تعليمية متطورة مصممة لتعزيز التميز في التعلم مع مرافق حديثة وهندسة معمارية مستدامة.",
  },
  {
    id: "petromin-station",
    titleEn: "Petromin Gasoline Station at Al Aziziyah",
    titleAr: "محطة بترومين للوقود في العزيزية",
    sector: "commercial",
    sectorLabelEn: "Commercial",
    sectorLabelAr: "تجاري",
    location: "Jeddah, Saudi Arabia",
    locationAr: "جدة، المملكة العربية السعودية",
    image: "/projects/station.jpg",
    descriptionEn:
      "Modern fuel station with integrated convenience services, built to the highest safety and environmental standards.",
    descriptionAr:
      "محطة وقود حديثة مع خدمات متكاملة، مبنية وفقاً لأعلى معايير السلامة والبيئة.",
  },
  {
    id: "inspection-station",
    titleEn: "Cars Periodic Inspection Station",
    titleAr: "محطة الفحص الدوري للسيارات",
    sector: "transport",
    sectorLabelEn: "Transport",
    sectorLabelAr: "نقل",
    location: "Jeddah, Saudi Arabia",
    locationAr: "جدة، المملكة العربية السعودية",
    image: "/projects/inspection.jpg",
    descriptionEn:
      "Comprehensive vehicle inspection facility equipped with advanced diagnostic technology and efficient processing systems.",
    descriptionAr:
      "منشأة فحص شاملة للمركبات مجهزة بتقنيات تشخيصية متقدمة وأنظمة معالجة فعالة.",
  },
];
