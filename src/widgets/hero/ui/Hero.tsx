"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, stagger } from "@/shared/lib/motion";
import {pushEvent} from "@/shared/lib/push-event";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_340px]">

          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs uppercase tracking-[0.25em] text-neutral-600"
            >
              Frontend Developer · 4,8 лет опыта
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-[clamp(3.2rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-[#f0f0f0]"
            >
              МАКСИМ
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-md text-[1.05rem] leading-relaxed text-neutral-400"
            >
              Строю сложные фронтенд-продукты: мессенджеры с real-time
              логикой, CRM-системы, аналитические платформы.
              Чистая архитектура, читаемый код, интерфейс который работает.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-2">
              <a
                href="#cases"
                className="group inline-flex items-center gap-2 text-sm text-[#f0f0f0]"
              >
                <span className="border-b border-neutral-700 pb-px transition-colors duration-200 group-hover:border-[#f0f0f0]">
                  Смотреть кейсы
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-300"
                onClick={() => pushEvent("cta_click", {button_name: "contact", button_location: "hero"})}
              >
                Связаться
              </a>
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-white/6 bg-[#111]">
              <Image
                src="/photo.jpg"
                alt="Максим"
                fill
                className="object-cover object-top"
                sizes="340px"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#080808]/70 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-6 right-6"
      >
        <div className="mx-auto max-w-5xl h-px w-full bg-white/5" />
      </motion.div>
    </section>
  );
}
