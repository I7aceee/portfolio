"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, stagger } from "@/shared/lib/motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-[180px_1fr]"
        >
          <motion.div variants={fadeInUp} className="pt-1">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
              Обо мне
            </span>
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-5">
            <motion.p
              variants={fadeInUp}
              className="text-[1.15rem] leading-relaxed text-neutral-300"
            >
              4,8 года коммерческой разработки. Специализируюсь на сложных
              продуктах — мессенджеры с real-time логикой, аналитические
              платформы, CRM-системы.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-[1.15rem] leading-relaxed text-neutral-500"
            >
              Строю масштабируемую архитектуру по FSD, работаю на стеке
              Next.js + TypeScript + React. Нахожу баланс между скоростью
              разработки и качеством кода — без культа перфекционизма там,
              где он не нужен.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-[1.15rem] leading-relaxed text-neutral-500"
            >
              Хорошо работаю на стыке разработки и дизайна — понимаю
              продуктовые задачи, не теряю детали в реализации.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
