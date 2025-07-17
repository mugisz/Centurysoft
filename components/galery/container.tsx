"use client";

import ContentCards from "@/assets/ContentCards.png";
import { galeryImageVariants } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ContentHeader } from "../content-header";
import { BounceButton } from "../ui";

export function GalleryContainer() {
  const [visibleImages, setVisibleImages] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const totalImages = 8;
  const initialImages = 4;

  const handleSeeMore = () => {
    setVisibleImages((prev) => Math.min(prev + 8, totalImages));
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setVisibleImages(initialImages);
    setIsExpanded(false);
  };

  return (
    <section className="flex flex-col justify-center gap-6 my-12 px-4">
      <ContentHeader
        title="Gallery"
        description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
      />

      <div className="flex items-center flex-col justify-center">
        <AnimatePresence mode="popLayout">
          <div className="flex flex-row flex-wrap justify-center gap-6">
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
                  scale: 1.08,
                  y: -8,
                  rotate: index % 2 === 0 ? 1 : -1,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.94 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={ContentCards}
                  className="rounded-lg transition-all duration-300 hover:brightness-125"
                  alt={`Gallery image ${index + 1}`}
                  width={225}
                  height={225}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        <div className="mt-8">
          {visibleImages < totalImages && !isExpanded && (
            <motion.div
              key="see-more"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <BounceButton
                text="See more"
                handleClick={handleSeeMore}
                isHidden={false}
              />
            </motion.div>
          )}
          {isExpanded && (
            <BounceButton
              text="Show less"
              handleClick={handleShowLess}
              isHidden={false}
            />
          )}
        </div>
      </div>
    </section>
  );
}
