import ChatBot from "@/assets/ChatBot.png";
import LineChart from "@/assets/LineChart.png";
import FeatureFirstIcon from "@/assets/icon/feature-first.svg";
import FeatureThirdIcon from "@/assets/icon/feature-last.svg";
import FeatureSecondIcon from "@/assets/icon/feature-second.svg";
import { Easing } from "framer-motion";

export const FEATURES_CONTENT = {
  title: "FEATURES",
  description:
    "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
  features: [
    {
      title: "A single source",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat ratione autem beatae rem. Adipisci.",
      delay: 0.1,
      icon: FeatureFirstIcon,
    },
    {
      title: "Intuitive Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat ratione autem beatae rem. Adipisci.",
      delay: 0.2,
      icon: FeatureSecondIcon,
    },
    {
      title: "Powerful Analytics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat ratione autem beatae rem. Adipisci.",
      delay: 0.3,
      icon: FeatureThirdIcon,
    },
  ],
};

export const FEATURE_IMAGES = {
  chatBot: ChatBot,
  lineChart: LineChart,
};

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  feature: {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, -0.05, 0.95] as Easing,
      },
    },
  },
};

export const FEATURE_STYLES = {
  section: "w-full flex flex-col justify-center gap-10 px-4 mb-6",
  header:
    "flex flex-col justify-center items-center gap-2 max-w-[500px] mx-auto",
  title: "uppercase text-[36px] font-semibold",
  description: "text-[-foundational-gray-500] text-center",
  content:
    "flex sm:flex-row flex-col items-center sm:items-start justify-center gap-6",
  imageContainer: "relative",
  featuresContainer: "flex flex-col items-center justify-between",
  featureCard:
    "flex flex-col items-center justify-start gap-4 w-[269px] h-[200px]",
  featureHeader: "flex flex-row justify-start gap-2 w-full items-center",
  featureTitle: "text-[22px] font-semibold",
  featureDescription: "text-[14px] text-start font-medium",
};
