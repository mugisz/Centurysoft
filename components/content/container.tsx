"use client";

import Card from "@/assets/ContentCards.png";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ContentHeader } from "../content-header";

export function ContentsContainer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col mt-[120px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={headerVariants}>
        <ContentHeader
          title="Contents"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            iusto, cupiditate quo nihil quos autem, doloribus reprehenderit"
        />
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-col sm:flex-row gap-6 mt-8"
        variants={containerVariants}
      >
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src={Card}
            alt="Card"
            width={476}
            height={624}
            className="shadow-lg rounded-lg"
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src={Card}
            alt="Card"
            width={476}
            height={624}
            className="shadow-lg rounded-lg"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
