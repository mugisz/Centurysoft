import { GlobalContainer } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT Development & Innovative Solutions | Centurysoft",
  description:
    "Professional IT development services by Centurysoft: web applications, mobile apps, UI/UX design, and cloud solutions. Empower your business with cutting-edge technology.",
  keywords: [
    "IT development",
    "web development",
    "mobile apps",
    "UI/UX design",
    "cloud solutions",
    "custom software",
    "IT services",
    "Centurysoft",
  ],
  openGraph: {
    title: "IT Development & Innovative Solutions | Centurysoft",
    description:
      "Centurysoft delivers modern IT solutions for your business, from web applications to cloud technologies. Discover how we can elevate your company!",
    url: "https://centurysoft.com",
    siteName: "Centurysoft",
    images: [
      {
        url: "https://centurysoft.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT Development by Centurysoft",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Development & Innovative Solutions | Centurysoft",
    description:
      "Transform your business with innovative IT solutions: web, mobile, and cloud development. Contact Centurysoft today!",
    images: ["https://centurysoft.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <section className="min-h-screen min-w-screen bg-black">
          <GlobalContainer>{children}</GlobalContainer>
        </section>
      </body>
    </html>
  );
}
