"use client";
import { motion } from "framer-motion";

export default function Animate() {
  return (
    <motion.div
      intial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 2, color: "red" }}
      whileHover={{ scale: 3 }}
      viewport={{ once: false }}
      transition={{ duration: 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: [0, 0, 360, 360, 0] }}
    >
      <h1>WELCOME</h1>
    </motion.div>
  );
}
