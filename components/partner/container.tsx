"use client";
import {
  partnerButtonVariants,
  PARTNERS,
  partnersContainerVariants,
  partnersHeaderVariants,
  partnerVariants,
} from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ContentHeader } from "../content-header";
import { BounceButton } from "../ui";

export function PartnerContainer() {
  const [visiblePartners, setVisiblePartners] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const initialPartners = 6;

  const handleSeeMore = () => {
    setVisiblePartners(PARTNERS.length);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setVisiblePartners(initialPartners);
    setIsExpanded(false);
  };

  return (
    <motion.section
      className="flex flex-col justify-center items-center gap-6 px-2 sm:px-0"
      variants={partnersContainerVariants}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={partnersHeaderVariants}>
        <ContentHeader
          title="Partners"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        />
      </motion.div>

      <motion.div
        className="flex flex-row justify-center "
        variants={partnersContainerVariants}
      >
        <div className="max-w-[830px] flex flex-row flex-wrap justify-center gap-16">
          <AnimatePresence mode="popLayout">
            {PARTNERS.slice(0, visiblePartners).map((partner, index) => (
              <motion.div
                key={partner.id}
                variants={partnerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                layoutId={`partner-${partner.id}`}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-[60px] h-[60px] bg-gradient-to-br ${partner.img} rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300`}
                title={partner.name}
              />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div variants={partnerButtonVariants}>
        {!isExpanded ? (
          <BounceButton
            text="All Partners"
            handleClick={handleSeeMore}
            isHidden={false}
          />
        ) : (
          <BounceButton
            text="Show Less"
            handleClick={handleShowLess}
            isHidden={false}
          />
        )}
      </motion.div>
    </motion.section>
  );
}
