"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

export const SplashScreenAnimation = ({
  onComplete,
}: {
  onComplete: () => void;
}) => {
  const animationRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1920),
      y:
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight : 1080),
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  const letterVariants: Variants = useMemo(
    () => ({
      hidden: { y: 100, opacity: 0 },
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.8 + i * 0.1,
          ease: "easeOut" as const,
        },
      }),
    }),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      ref={animationRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-600 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide">
            Welcome to
          </h2>
        </motion.div>

        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider relative">
            {"CENTURYSOFT".split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="absolute inset-0 text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text tracking-wider blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            CENTURYSOFT
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-white font-light tracking-wide">
            Innovative IT Solutions
          </p>
        </motion.div>

        {/* Optimized loading dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="flex items-center justify-center space-x-2"
        >
          {[0, 0.2, 0.4].map((delay, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay,
              }}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        onAnimationComplete={onComplete}
        className="absolute"
      />
    </div>
  );
};
