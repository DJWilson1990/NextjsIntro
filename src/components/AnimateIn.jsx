"use client";

import { motion } from "framer-motion";

export default function AnimateIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: [0, 0, 270, 270, 0] }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
