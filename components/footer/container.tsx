"use client";
import {
  CONTACT_INFO,
  FOOTER_SECTIONS,
  footerContainerVariants,
  footerItemVariants,
  footerLinkVariants,
  SOCIAL_LINKS,
} from "@/constants";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import FooterList from "./list";

export function Footer() {
  return (
    <motion.footer
      className=" text-white py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerContainerVariants}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1031px] mx-auto   ">
        <FooterList />
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.p
            className="text-center text-gray-500 text-sm"
            whileHover={{ color: "#9ca3af" }}
          >
            © 2024 Fingertipe. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
