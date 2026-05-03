"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, stagger } from "@/shared/lib/motion";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:i7ace@mail.ru",
    display: "i7ace@mail.ru",
  },
  {
    label: "Telegram",
    href: "https://t.me/i7ace",
    display: "@i7ace",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-12 border-b border-white/[0.06] pb-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
              Контакты
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mb-12 max-w-md text-[1.1rem] leading-relaxed text-neutral-500"
          >
            Открыт к предложениям о работе и интересным проектам.
            Напишите — отвечу быстро.
          </motion.p>

          <motion.div variants={stagger} className="flex flex-col">
            {contactLinks.map((link) => (
              <motion.div key={link.label} variants={fadeInUp}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/[0.06] py-5 transition-colors duration-200 hover:border-white/[0.12]"
                >
                  <span className="text-xs uppercase tracking-[0.15em] text-neutral-700">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-2 text-[0.95rem] text-neutral-400 transition-colors duration-200 group-hover:text-[#f0f0f0]">
                    {link.display}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
