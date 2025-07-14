import { FOOTER_SECTIONS } from "@/constants";
import { FooterContactSection } from "./contact-info";
import { FooterSection } from "./list-section";

export default function FooterList() {
  return (
    <div className="flex flex-wrap justify-center items-start  sm:justify-around gap-[30px]">
      {FOOTER_SECTIONS.map((section, sectionIndex) => (
        <FooterSection
          key={section.title}
          section={section}
          sectionIndex={sectionIndex}
        />
      ))}
      <FooterContactSection />
    </div>
  );
}
