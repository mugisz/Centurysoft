"use client";
import { motion } from "framer-motion";
import { BounceButton, EnhancedDashedButton } from "../ui";
import { SplineScene } from "./index";
import { HeroTitle } from "./title";

export function HeroContainer() {
  return (
    <motion.section className="flex items-center justify-start sm:justify-center mt-[20%] sm:mt-0 flex-col h-[800px] sm:h-screen gap-10  sm:pb-[20%] relative">
      <SplineScene />
      <HeroTitle />
      <div className="flex flex-row items-center justify-center gap-6 z-20 pointer-events-auto">
        <EnhancedDashedButton text="Try for free" />
        <BounceButton text="Learn more" />
      </div>
    </motion.section>
  );
}
