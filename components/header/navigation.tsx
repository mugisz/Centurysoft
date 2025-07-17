"use client";
import { HOVER_STYLES } from "@/constants";
import { NavigationProps } from "@/interface";
import { motion } from "framer-motion";
import Link from "next/link";
export function Navigation({
  items,
  className = "",
  isMobile = false,
}: NavigationProps) {
  const baseStyles = isMobile
    ? "flex flex-col space-y-2 list-none m-0 p-0"
    : "flex space-x-8 list-none m-0 p-0";

  const linkStyles = isMobile
    ? `block text-white ${HOVER_STYLES} py-2 relative overflow-hidden`
    : `text-white flex flex-col gap-4 text-[14px] ${HOVER_STYLES} relative overflow-hidden`;

  return (
    <nav
      className={className}
      role="navigation"
      aria-label={isMobile ? "Mobile navigation" : "Main navigation"}
    >
      <ul className={baseStyles}>
        {items.map((item, index) => (
          <motion.li
            key={item.href}
            initial={{
              opacity: 0,
              y: isMobile ? -20 : -10,
              x: isMobile ? -30 : 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.href} className={linkStyles}>
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
