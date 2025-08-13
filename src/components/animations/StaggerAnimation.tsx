'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function StaggerAnimation({
  children,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  className,
}: {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren, staggerChildren },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
