"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "build" },
  { href: "/portfolio", label: "Portfolio", icon: "work" },
  { href: "/about", label: "About", icon: "person" },
  { href: "/blog", label: "Blog", icon: "article" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export default function TabNav() {
  const pathname = usePathname();

  return (
    <nav className="tab-nav">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`tab-item ${active ? "tab-active" : ""}`}
          >
            <span className="material-icons">{tab.icon}</span>
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
