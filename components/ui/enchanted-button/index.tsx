"use client";
import { motion } from "framer-motion";
export function EnhancedDashedButton({
  text,
  width = 120,
  height = 40,
}: {
  text: string;
  width?: number;
  height?: number;
}) {
  return (
    <motion.button
      className={`relative  text-white bg-primary  text-[12px] flex items-center justify-center  font-semibold text-sm  tracking-wide overflow-hidden group`}
      aria-label="Try for free"
      style={{ width: `${width}px`, height: `${height}px` }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 30px rgba(59, 130, 246, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
}
