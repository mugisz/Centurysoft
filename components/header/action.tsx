import { BounceButton } from "../ui";
import { MobileMenuButton } from "./mobile";

export function UserActions({
  isMobileMenuOpen,
  onMobileMenuToggle,
}: {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}) {
  return (
    <section className="flex items-center space-x-4 z-10">
      <BounceButton text="Login" />
      <MobileMenuButton
        isOpen={isMobileMenuOpen}
        onClick={onMobileMenuToggle}
      />
    </section>
  );
}
