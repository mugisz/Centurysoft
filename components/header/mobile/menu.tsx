"use client";
import { NavigationItem } from "@/interface";
import { AnimatePresence, motion } from "framer-motion";

export function MobileMenu({
  isOpen,
  items,
}: {
  isOpen: boolean;
  items: readonly NavigationItem[];
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="md:hidden overflow-hidden  z-20 pointer-events-auto">
          <div className="mt-4 z-10 bg-gradient-to-b from-black/30 to-black/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div>
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="mb-2 last:mb-0"
                >
                  <a
                    href={item.href}
                    className="block text-white hover:text-gray-300 py-3 px-4  z-10 rounded-lg hover:bg-white/10 transition-all duration-200 relative before:content-[''] before:absolute before:bottom-2 before:left-4 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 before:ease-out hover:before:w-8"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
