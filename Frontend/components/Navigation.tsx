"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Alumni", path: "/alumni" },
    { name: "Rankings", path: "/rankings" },
    { name: "Feedbacks", path: "/reviews" },
    { name: "Resources", path: "/resources" },
    { name: "Current Hiring", path: "/current-hiring" },
    { name: "Login", path: "/login" }
  ];

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-blue-400 transition-colors ${
              pathname === item.path ? "text-blue-400" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
} 