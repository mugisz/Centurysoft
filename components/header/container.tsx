"use client";
import { NAVIGATION_ITEMS } from "@/constants";
import { useState } from "react";
import { HeaderLogo, Navigation, UserActions } from "./index";
import { MobileMenu } from "./mobile";

export function HeaderContainer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full px-4 py-4  z-20 relative" role="banner">
      <div className="flex items-center justify-between max-w-[1100px] mx-auto h-[120px] z-20 ">
        <HeaderLogo />

        <Navigation items={NAVIGATION_ITEMS} className="hidden md:flex" />

        <UserActions
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={toggleMobileMenu}
        />
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} items={NAVIGATION_ITEMS} />
    </header>
  );
}
