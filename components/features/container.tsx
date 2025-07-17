"use client";
import { FEATURE_IMAGES, FEATURE_STYLES, FEATURES_CONTENT } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FeatureList } from "./list";

export function FeaturesContainer() {
  return (
    <section
      className={FEATURE_STYLES.section}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.3 }}
      // variants={ANIMATION_VARIANTS.container}
    >
      <div className={FEATURE_STYLES.header}>
        <h3 className={FEATURE_STYLES.title}>{FEATURES_CONTENT.title}</h3>
        <p className={FEATURE_STYLES.description}>
          {FEATURES_CONTENT.description}
        </p>
      </div>

      <div className={FEATURE_STYLES.content}>
        <motion.div
          className={FEATURE_STYLES.imageContainer}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={FEATURE_IMAGES.chatBot} alt="ChatBot" />
          <Image
            src={FEATURE_IMAGES.lineChart}
            alt="LineChart"
            style={{ position: "absolute", bottom: "0", right: "0" }}
          />
        </motion.div>

        <FeatureList />
      </div>
    </section>
  );
}
