const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
const HOVER_STYLES = "hover:text-gray-400 transition-colors";

export { HOVER_STYLES, NAVIGATION_ITEMS };
