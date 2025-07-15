"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SplashScreenAnimation } from "./animation";

export const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreenAnimation onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5, delay: showSplash ? 0 : 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};
