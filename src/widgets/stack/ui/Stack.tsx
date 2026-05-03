"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  siNextdotjs,
  siReact,
  siTypescript,
  siRedux,
  siWordpress,
  siTailwindcss,
  siFramer,
  siGit,
} from "simple-icons";
import { SimpleIcon } from "simple-icons";
import { TechIcon } from "@/shared/ui/TechIcon";
import { EffectorIcon, FsdIcon } from "@/shared/ui/custom-icons";
import { fadeInUp, staggerFast } from "@/shared/lib/motion";
import { ComponentType } from "react";

interface StackItem {
  name: string;
  simpleIcon?: SimpleIcon;
  CustomIcon?: ComponentType<{ className?: string }>;
}

const stackItems: StackItem[] = [
  { name: "Next.js",       simpleIcon: siNextdotjs },
  { name: "React",         simpleIcon: siReact },
  { name: "TypeScript",    simpleIcon: siTypescript },
  { name: "Effector",      CustomIcon: EffectorIcon },
  { name: "Redux",         simpleIcon: siRedux },
  { name: "FSD",           CustomIcon: FsdIcon },
  { name: "WordPress",     simpleIcon: siWordpress },
  { name: "Tailwind CSS",  simpleIcon: siTailwindcss },
  { name: "Framer Motion", simpleIcon: siFramer },
  { name: "Git",           simpleIcon: siGit },
];

export function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-12 border-b border-white/[0.06] pb-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
              Стек
            </span>
          </motion.div>

          <motion.div
            variants={staggerFast}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {stackItems.map(({ name, simpleIcon, CustomIcon }) => (
              <motion.div
                key={name}
                variants={fadeInUp}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                className="group flex flex-col items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <div className="text-neutral-500 transition-colors duration-200 group-hover:text-neutral-200">
                  {simpleIcon && (
                    <TechIcon icon={simpleIcon} className="w-5 h-5" />
                  )}
                  {CustomIcon && (
                    <CustomIcon className="w-5 h-5" />
                  )}
                </div>
                <span className="text-sm text-neutral-500 transition-colors duration-200 group-hover:text-neutral-300">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
