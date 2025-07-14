import {
  footerContainerVariants,
  footerItemVariants,
  footerLinkVariants,
} from "@/constants";
import { FooterSectionProps } from "@/interface";
import { motion } from "framer-motion";

export function FooterSection({ section, sectionIndex }: FooterSectionProps) {
  return (
    <motion.div
      key={section.title}
      variants={footerItemVariants}
      className="space-y-4"
      transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
    >
      <motion.h3
        className="text-lg font-semibold text-gray-200"
        whileHover={{
          color: "#60a5fa",
          transition: { duration: 0.2 },
        }}
      >
        {section.title}
      </motion.h3>
      <motion.ul
        className="space-y-3"
        variants={footerContainerVariants}
        transition={{ staggerChildren: 0.05 }}
      >
        {section.links.map((link, linkIndex) => (
          <motion.li
            key={`${section.title}-${link.name}`}
            variants={footerLinkVariants}
            transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
          >
            <motion.a
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 block"
              whileHover={{
                x: 5,
                color: "#ffffff",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
