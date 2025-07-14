import Avatar from "@/assets/avatar.png";
import { Variants } from "framer-motion";
("use client");

const TESTIMONIALS = [
  {
    id: 1,
    name: "Claire Bell",
    role: "Designer",
    avatar: Avatar,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.",
  },
  {
    id: 2,
    name: "Francisco Lane",
    role: "Designer",
    avatar: Avatar,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    id: 3,
    name: "Ralph Fisher",
    role: "Designer",
    avatar: Avatar,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.",
  },
  {
    id: 4,
    name: "Jorge Murphy",
    role: "Designer",
    avatar: Avatar,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
];
const testimonialsContainerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const testimonialTitleVariants: Variants = {
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

const testimonialCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const testimonialAvatarVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export {
  testimonialAvatarVariants,
  testimonialCardVariants,
  TESTIMONIALS,
  testimonialsContainerVariants,
  testimonialTitleVariants,
};
