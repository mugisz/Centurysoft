"use client";
import { motion } from "framer-motion";
import { BounceButton, EnhancedDashedButton } from "../ui";
import { SplineScene } from "./index";

export function HeroContainer() {
  return (
    <motion.section
      className="flex items-center justify-start sm:justify-center mt-[20%] sm:mt-0 flex-col h-[800px] sm:h-screen gap-10  sm:pb-[20%] relative"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SplineScene />

      <div className="flex flex-col justify-center items-center gap-2 px-2 sm:px-10 z-20 pointer-events-none">
        <motion.h2
          className=" text-[30px] sm:text-[50px] md:text-[80px] text-center font-bold text-white sm:max-w-[80%] sm:leading-[80px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Centurysoft
          </span>
          <br />
          bring your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            ideas
          </span>{" "}
          into the life
        </motion.h2>

        <motion.p
          className="text-[14px] sm:text-[16px] text-center text-gray-400 max-w-[500px]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-row items-center justify-center gap-6 z-20 pointer-events-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <EnhancedDashedButton text="Try for free" />
        <BounceButton text="Learn more" />
      </motion.div>
    </motion.section>
  );
}
