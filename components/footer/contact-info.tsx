import { CONTACT_INFO } from "@/constants";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { SocialLinks } from "./social-links";

export function FooterContactSection() {
  return (
    <div className="space-y-4  flex flex-col justify-center items-start  pr-20 md:pr-0">
      <motion.div
        className="flex items-start space-x-3"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
          <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
        </motion.div>
        <span className="text-gray-400 text-sm leading-relaxed">
          {CONTACT_INFO.address}
        </span>
      </motion.div>

      <motion.div
        className="flex items-center space-x-3"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
          <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </motion.div>
        <span className="text-gray-400 text-sm">{CONTACT_INFO.phone}</span>
      </motion.div>
      <SocialLinks />
    </div>
  );
}
