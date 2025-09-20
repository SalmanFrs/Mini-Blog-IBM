"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
}

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
