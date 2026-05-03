"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Обо мне", href: "#about",   mobileHidden: true  },
  { label: "Кейсы",   href: "#cases",   mobileHidden: false },
  { label: "Стек",    href: "#stack",   mobileHidden: true  },
  { label: "Контакты",href: "#contact", mobileHidden: false },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold text-[#f0f0f0] tracking-wider"
        >
          max<span className="text-neutral-600">.dev</span>
        </Link>
        <ul className="flex items-center gap-5 sm:gap-7">
          {navLinks.map((link) => (
            <li key={link.href} className={link.mobileHidden ? "hidden sm:block" : ""}>
              <a
                href={link.href}
                className="text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
