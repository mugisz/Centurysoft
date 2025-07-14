import Logo from "@/assets/Logo.png";
import Image from "next/image";

export function HeaderLogo() {
  return (
    <div className="flex items-center pb-2  z-10">
      <Image src={Logo} alt="Company Logo" width={206} height={78} priority />
    </div>
  );
}
