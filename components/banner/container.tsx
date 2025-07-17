"use client";
import Chart from "@/assets/Banner.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { EnhancedDashedButton } from "../ui";

export function BannerContainer() {
  return (
    <section
      className="w-[80%] mx-auto lg:w-full h-[500px] lg:h-[370px] py-2 rounded-3xl  border border-white relative flex justify-start items-center overflow-hidden"
      // animate={{ opacity: 1, y: 0 }}
      // initial={{ y: 100, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.8, ease: "easeOut" }}
      // viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col justify-start items-center lg:items-start lg:ml-10  lg:w-1/2 gap-4 relative z-10  h-full pt-10 px-2 lg:px-0 ">
        <h4 className=" text-[34px] lg:text-[54px] font-bold text-white leading-tight text-center lg:text-left ">
          OpenType features and Variable fonts
        </h4>

        <EnhancedDashedButton text="Try for free" width={232} height={52} />
      </div>

      <motion.div
        className="absolute right-0 bottom-0"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          x: -10,
          filter: "brightness(1.1)",
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src={Chart}
          alt="Chart"
          width={585}
          height={453.4296875}
          className="transition-all duration-300"
        />
      </motion.div>

      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
