"use client";
import { ANIMATION_VARIANTS, FEATURE_STYLES } from "@/constants";
import { IFeature } from "@/interface";
import { motion } from "framer-motion";
import Image from "next/image";

export function FeatureItem({
  feature,
  index,
}: {
  feature: IFeature;
  index: number;
}) {
  return (
    <motion.div
      key={index}
      className={FEATURE_STYLES.featureCard}
      initial={ANIMATION_VARIANTS.feature.hidden}
      whileInView={ANIMATION_VARIANTS.feature.visible}
      transition={{ duration: 0.6, delay: feature.delay }}
      whileHover={{ y: -10 }}
    >
      <div className={FEATURE_STYLES.featureHeader}>
        <Image src={feature.icon} alt="FeatureIcon" />
        <h4 className={FEATURE_STYLES.featureTitle}>{feature.title}</h4>
      </div>
      <p className={FEATURE_STYLES.featureDescription}>{feature.description}</p>
    </motion.div>
  );
}
