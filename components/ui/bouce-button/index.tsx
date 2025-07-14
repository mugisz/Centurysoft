"use client";
import { motion } from "framer-motion";

export function BounceButton({
  text,
  handleClick,
  isHidden = true,
}: {
  text: string;
  handleClick?: () => void;
  isHidden?: boolean;
}) {
  return (
    <motion.button
      onClick={handleClick}
      className={`border border-white text-white w-[120px] h-[40px] ${
        isHidden && "hidden"
      } md:flex items-center justify-center  text-[12px] transition-colors`}
      aria-label="Login to your account"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {text}
    </motion.button>
  );
}
