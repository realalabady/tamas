import { Building2, ClipboardList, Truck, Landmark } from "lucide-react";

export interface Service {
  id: string;
  icon: typeof Building2;
  translationKey: string;
}

export const services: Service[] = [
  {
    id: "construction",
    icon: Building2,
    translationKey: "construction",
  },
  {
    id: "management",
    icon: ClipboardList,
    translationKey: "management",
  },
  {
    id: "procurement",
    icon: Truck,
    translationKey: "procurement",
  },
  {
    id: "infrastructure",
    icon: Landmark,
    translationKey: "infrastructure",
  },
];
