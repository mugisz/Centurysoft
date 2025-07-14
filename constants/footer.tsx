import { Facebook, Linkedin, Twitter } from "lucide-react";

const FOOTER_SECTIONS = [
  {
    title: "Fingertipe",
    links: [
      { name: "Home", href: "/" },
      { name: "Examples", href: "/examples" },
      { name: "Pricing", href: "/pricing" },
      { name: "Updates", href: "/updates" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Home", href: "/" },
      { name: "Examples", href: "/examples" },
      { name: "Pricing", href: "/pricing" },
      { name: "Updates", href: "/updates" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Home", href: "/" },
      { name: "Examples", href: "/examples" },
      { name: "Pricing", href: "/pricing" },
      { name: "Updates", href: "/updates" },
    ],
  },
];

const CONTACT_INFO = {
  address: "7480 Mockingbird Hill undefined",
  phone: "(239) 555-0108",
};

const SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
];
const footerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const footerItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const footerLinkVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export {
  CONTACT_INFO,
  FOOTER_SECTIONS,
  footerContainerVariants,
  footerItemVariants,
  footerLinkVariants,
  SOCIAL_LINKS,
};
