import { HeaderContainer, HeroContainer, LoadingSpinner } from "@/components";
import { Suspense, lazy } from "react";
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
  import("@/components").then((module) => ({
    default: module.Testimonials,
  }))
);

const BannerContainer = lazy(() =>
  import("@/components").then((module) => ({
    default: module.BannerContainer,
  }))
);

const Footer = lazy(() =>
  import("@/components").then((module) => ({
    default: module.Footer,
  }))
);

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <HeroContainer />

      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesContainer />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ContentsContainer />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <GalleryContainer />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <PartnerContainer />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <BannerContainer />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}
