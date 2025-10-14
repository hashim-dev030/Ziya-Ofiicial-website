import { useState } from "react";
import type { NavbarItem } from "../models/NavbarItem";

export const useNavbarViewModel = () => {
  const [items, setItems] = useState<NavbarItem[]>([
    { label: "Home", href: "/", isActive: true },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Internships", href: "/internships" },
    { label: "Service", href: "/service" },
    { label: "Contact Us", href: "/contact" },
  ]);

  const setActive = (label: string) => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        isActive: item.label === label,
      }))
    );
  };

  return { items, setActive };
};
