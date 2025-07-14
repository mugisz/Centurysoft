interface FooterSectionProps {
  section: {
    title: string;
    links: {
      name: string;
      href: string;
    }[];
  };
  sectionIndex: number;
}

export type { FooterSectionProps };
