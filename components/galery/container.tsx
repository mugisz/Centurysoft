"use client";

import ContentCards from "@/assets/ContentCards.png";
import {
  galeryButtonVariants,
  galeryContainerVariants,
  galeryHeaderVariants,
  galeryImageVariants,
} from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ContentHeader } from "../content-header";
import { BounceButton } from "../ui";

export function GalleryContainer() {
  const [visibleImages, setVisibleImages] = useState(8);
  const [isExpanded, setIsExpanded] = useState(false);
  const totalImages = 16;
  const initialImages = 8;

  const handleSeeMore = () => {
    setVisibleImages((prev) => Math.min(prev + 8, totalImages));
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setVisibleImages(initialImages);
    setIsExpanded(false);
  };

  return (
    <motion.section
      className="flex flex-col justify-center gap-4 my-10"
      variants={galeryContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={galeryHeaderVariants}>
        <ContentHeader
          title="Gallery"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        />
      </motion.div>

      <div className="flex items-center flex-col justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            className="flex flex-row flex-wrap justify-center gap-4"
            variants={galeryContainerVariants}
            layout
          >
            {Array.from({ length: visibleImages }).map((_, index) => (
              <motion.div
                key={index}
                variants={galeryImageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                layoutId={`image-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="overflow-hidden rounded-sm"
              >
                <Image
                  src={ContentCards}
                  className="rounded-sm transition-all duration-300 hover:brightness-110"
                  alt={`Gallery image ${index + 1}`}
                  width={225}
                  height={225}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div variants={galeryButtonVariants} className="mt-6">
          {visibleImages < totalImages && !isExpanded && (
            <BounceButton
              text="See more"
              handleClick={handleSeeMore}
              isHidden={false}
            />
          )}
          {isExpanded && (
            <BounceButton
              text="Show less"
              handleClick={handleShowLess}
              isHidden={false}
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
