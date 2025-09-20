"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
}

const variants: Variants = {
  hidden: { opacity: 0, x: -50 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
