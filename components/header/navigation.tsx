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
      <motion.ul
        className={baseStyles}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
              <motion.span
                className="relative z-10"
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                {item.label}
              </motion.span>

              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gray-400"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{
                  width: "100%",
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "100%",
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
