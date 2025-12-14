export interface TeamMember {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  officeEn: string;
  officeAr: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "abdul-rehman",
    nameEn: "Abdul Rehman",
    nameAr: "عبد الرحمن",
    roleEn: "Procurement Manager",
    roleAr: "مدير المشتريات",
    officeEn: "Jeddah Office – Head Office",
    officeAr: "مكتب جدة – المكتب الرئيسي",
    image: "/team/member1.jpg",
  },
  {
    id: "fahem-milihi",
    nameEn: "Fahem Milihi",
    nameAr: "فاهم مليحي",
    roleEn: "Project Manager",
    roleAr: "مدير المشاريع",
    officeEn: "Jeddah Office – Head Office",
    officeAr: "مكتب جدة – المكتب الرئيسي",
    image: "/team/member2.jpg",
  },
  {
    id: "waleed-hamdi",
    nameEn: "Waleed Hamdi",
    nameAr: "وليد حمدي",
    roleEn: "Project Manager",
    roleAr: "مدير المشاريع",
    officeEn: "Jeddah Office – Head Office",
    officeAr: "مكتب جدة – المكتب الرئيسي",
    image: "/team/member3.jpg",
  },
];
