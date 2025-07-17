"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { SplashScreenAnimation } from "./animation";

interface SplashScreenProps {
  children: React.ReactNode;
  duration?: number;
  skipOnInteraction?: boolean;
}

const useBodyOverflow = (isLocked: boolean) => {
  const originalOverflowRef = useRef<string | null>(null);

  useEffect(() => {
    const body = document.body;

    if (originalOverflowRef.current === null) {
      originalOverflowRef.current = body.style.overflow || "auto";
    }

    body.style.overflow = isLocked ? "hidden" : originalOverflowRef.current;

    return () => {
      body.style.overflow = originalOverflowRef.current || "auto";
    };
  }, [isLocked]);
};

const useSplashScreen = (duration: number, skipOnInteraction: boolean) => {
  const [showSplash, setShowSplash] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const hideSplash = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsAnimating(true);
    setShowSplash(false);
  }, []);

  const handleComplete = useCallback(() => {
    hideSplash();
  }, [hideSplash]);

  const handleSkip = useCallback(() => {
    if (skipOnInteraction && showSplash) {
      hideSplash();
    }
  }, [skipOnInteraction, showSplash, hideSplash]);

  useEffect(() => {
    timerRef.current = setTimeout(hideSplash, duration);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration, hideSplash]);

  useEffect(() => {
    if (!skipOnInteraction) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        handleSkip();
      }
    };

    const handleClick = () => handleSkip();

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleClick);
    };
  }, [skipOnInteraction, handleSkip]);

  return {
    showSplash,
    isAnimating,
    handleComplete,
  };
};

export const SplashScreen = ({
  children,
  duration = 3500,
  skipOnInteraction = false,
}: SplashScreenProps) => {
  const { showSplash, isAnimating, handleComplete } = useSplashScreen(
    duration,
    skipOnInteraction
  );

  useBodyOverflow(showSplash);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreenAnimation onComplete={handleComplete} key="splash" />
        )}
      </AnimatePresence>

      <motion.div
        className="overflow-hidden"
        initial="hidden"
        animate={showSplash ? "hidden" : "visible"}
        style={{
          minHeight: showSplash ? "100vh" : "auto",
        }}
      >
        {(!showSplash || isAnimating) && children}
      </motion.div>

      {skipOnInteraction && showSplash && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 text-white/70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          Press ESC or click to skip
        </motion.div>
      )}
    </>
  );
};

export type { SplashScreenProps };
