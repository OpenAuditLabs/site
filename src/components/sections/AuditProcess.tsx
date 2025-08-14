"use client";

import { ClipboardList, Eye, FileCode2, Search } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Code Analysis",
    description:
      "Deep static analysis of your smart contract code to identify potential vulnerabilities",
    icon: Search,
  },
  {
    id: 2,
    title: "Automated Testing",
    description:
      "Comprehensive automated testing suite covering edge cases and attack vectors",
    icon: FileCode2,
  },
  {
    id: 3,
    title: "Manual Review",
    description:
      "Expert manual review by senior security auditors for logic flaws",
    icon: Eye,
  },
  {
    id: 4,
    title: "Final Report",
    description:
      "Detailed report with findings, severity levels, and remediation recommendations",
    icon: ClipboardList,
  },
] as const;

export function AuditProcess() {
  return (
    <section
      aria-labelledby="audit-process-title"
      className="relative w-full bg-background py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* subtle atmospheric glows (non-intrusive and accessible in light/dark) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-[10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-[12%] h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <h2
            id="audit-process-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Our Audit Process
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground">
            A comprehensive approach to smart contract security combining
            cutting-edge automation with expert human analysis
          </p>
        </motion.div>

        {/* Steps */}
        <ol
          role="list"
          aria-label="Audit steps"
          className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const titleId = `step-${step.id}-title`;
            const descId = `step-${step.id}-desc`;
            return (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative"
              >
                <article
                  tabIndex={0}
                  aria-labelledby={titleId}
                  aria-describedby={descId}
                  className="relative h-full rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 pt-10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 focus-visible:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
                >
                  {/* top-centered icon medallion */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="h-14 w-14 rounded-full bg-background ring-2 ring-white/80 dark:ring-white/50 shadow-md flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-foreground/90 dark:bg-black/70 text-white flex items-center justify-center">
                          <Icon aria-hidden className="h-6 w-6 text-cyan-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* numbered badge */}
                  <div className="absolute top-2 right-4 h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-lg grid place-items-center">
                    <span className="sr-only">Step</span>
                    {step.id}
                  </div>

                  {/* right connector accent */}
                  {idx < steps.length - 1 && (
                    <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-border to-transparent lg:block" />
                  )}

                  <h3
                    id={titleId}
                    className="mt-4 text-center text-lg sm:text-xl font-semibold text-foreground"
                  >
                    {step.title}
                  </h3>
                  <p
                    id={descId}
                    className="mt-4 text-center text-sm sm:text-base leading-relaxed text-muted-foreground"
                  >
                    {step.description}
                  </p>

                  {/* subtle hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(139,92,246,0.04) 100%)",
                    }}
                  />
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default AuditProcess;
