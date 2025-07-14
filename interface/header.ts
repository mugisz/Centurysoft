interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationProps {
  items: readonly NavigationItem[];
  className?: string;
  isMobile?: boolean;
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export type { MobileMenuButtonProps, NavigationItem, NavigationProps };
