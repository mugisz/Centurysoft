"use client";
import {
  BannerContainer,
  ContentsContainer,
  FeaturesContainer,
  Footer,
  GalleryContainer,
  HeaderContainer,
  HeroContainer,
  PartnerContainer,
  Testimonials,
} from "@/components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderContainer />
      <HeroContainer />
      <FeaturesContainer />
      <ContentsContainer />
      <GalleryContainer />
      <PartnerContainer />
      <Testimonials />
      <BannerContainer />
      <Footer />
    </motion.div>
  );
}
