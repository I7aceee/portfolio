"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { cases } from "@/shared/config/cases";
import { fadeInUp, stagger } from "@/shared/lib/motion";

export function CasesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" className="px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div
            variants={fadeInUp}
            className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
              Кейсы
            </span>
          </motion.div>

          {/* Case list */}
          <div className="flex flex-col">
            {cases.map((item) => (
              <motion.div key={item.slug} variants={fadeInUp}>
                <Link href={`/cases/${item.slug}`}>
                  <div className="group cursor-pointer border-b border-white/[0.06] py-9 transition-colors duration-200 hover:border-white/[0.12]">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex flex-col gap-4">
                        {/* Title row */}
                        <div className="flex items-baseline gap-4">
                          <span className="text-xs text-neutral-700 tabular-nums">
                            {item.index}
                          </span>
                          <h2 className="text-2xl font-semibold text-[#f0f0f0] transition-colors duration-200 group-hover:text-white">
                            {item.title}
                          </h2>
                        </div>

                        {/* Description */}
                        <p className="max-w-lg text-[0.95rem] leading-relaxed text-neutral-500">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-neutral-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <span className="mt-1 shrink-0 text-neutral-700 transition-all duration-200 group-hover:translate-x-1 group-hover:text-neutral-300">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
