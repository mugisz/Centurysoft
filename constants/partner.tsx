import { Variants } from "framer-motion";

const PARTNERS = [
  { id: 1, name: "Partner 1", img: "from-blue-400 to-purple-500" },
  { id: 2, name: "Partner 2", img: "from-purple-500 to-pink-500" },
  { id: 3, name: "Partner 3", img: "from-pink-500 to-red-500" },
  { id: 4, name: "Partner 4", img: "from-red-500 to-orange-500" },
  { id: 5, name: "Partner 5", img: "from-orange-500 to-yellow-500" },
  { id: 6, name: "Partner 6", img: "from-yellow-500 to-green-500" },
  { id: 7, name: "Partner 7", img: "from-green-500 to-teal-500" },
  { id: 8, name: "Partner 8", img: "from-teal-500 to-cyan-500" },
  { id: 9, name: "Partner 9", img: "from-cyan-500 to-blue-500" },
  { id: 10, name: "Partner 10", img: "from-blue-500 to-indigo-500" },
];

const partnersContainerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const partnersHeaderVariants: Variants = {
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

const partnerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const partnerButtonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};
export {
  partnerButtonVariants,
  PARTNERS,
  partnersContainerVariants,
  partnersHeaderVariants,
  partnerVariants,
};
