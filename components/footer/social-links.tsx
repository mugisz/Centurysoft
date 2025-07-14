import {
  footerItemVariants,
  footerLinkVariants,
  SOCIAL_LINKS,
} from "@/constants";
import { motion } from "framer-motion";

export function SocialLinks() {
  return (
    <div className="space-y-4 ">
      <motion.h4
        className="text-sm font-medium text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Follow us
      </motion.h4>
      <motion.div
        className="flex space-x-4"
        variants={footerLinkVariants}
        transition={{ staggerChildren: 0.1 }}
      >
        {SOCIAL_LINKS.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              variants={footerItemVariants}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.2,
                color: "#60a5fa",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.name}
            >
              <IconComponent className="w-5 h-5" />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
