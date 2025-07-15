"use client";

import Card from "@/assets/ContentCards.png";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ContentHeader } from "../content-header";

export function ContentsContainer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col mt-[120px] px-4"
      variants={containerVariants}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={headerVariants}>
        <ContentHeader
          title="Contents"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iusto, cupiditate quo nihil quos autem, doloribus reprehenderit"
        />
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-col sm:flex-row gap-8 mt-10"
        variants={containerVariants}
      >
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.06,
            y: -12,
            rotate: 1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.97 }}
        >
          <Image
            src={Card}
            alt="Card 1"
            width={476}
            height={624}
            className="shadow-xl rounded-xl"
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.06,
            y: -12,
            rotate: -1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.97 }}
        >
          <Image
            src={Card}
            alt="Card 2"
            width={476}
            height={624}
            className="shadow-xl rounded-xl"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
