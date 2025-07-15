"use client";
import { lazy } from "react";

import { HeaderContainer, HeroContainer, SplashScreen } from "@/components";

const FeaturesContainer = lazy(() =>
  import("@/components").then((module) => ({
    default: module.FeaturesContainer,
  }))
);

const ContentsContainer = lazy(() =>
  import("@/components").then((module) => ({
    default: module.ContentsContainer,
  }))
);

const GalleryContainer = lazy(() =>
  import("@/components").then((module) => ({
    default: module.GalleryContainer,
  }))
);

const PartnerContainer = lazy(() =>
  import("@/components").then((module) => ({
    default: module.PartnerContainer,
  }))
);

const Testimonials = lazy(() =>
  import("@/components").then((module) => ({ default: module.Testimonials }))
);

const BannerContainer = lazy(() =>
  import("@/components").then((module) => ({ default: module.BannerContainer }))
);

const Footer = lazy(() =>
  import("@/components").then((module) => ({ default: module.Footer }))
);

export default function Home() {
  return (
    <>
      <SplashScreen>
        <HeaderContainer />
        <HeroContainer />

        <FeaturesContainer />

        <ContentsContainer />

        <GalleryContainer />

        <PartnerContainer />

        <Testimonials />

        <BannerContainer />

        <Footer />
      </SplashScreen>
    </>
  );
}
