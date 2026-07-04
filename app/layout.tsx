import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

/* Luxury Heading Font */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

/* Body Font */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

/* SEO Metadata */

export const metadata: Metadata = {
  title: "Kaya Glow Beauty Salon | Premium Salon in Indore",
  description:
    "Luxury beauty salon in Indore offering bridal makeup, bridal packages, facials, hair spa, cleanup, waxing, body polishing and premium skincare services.",
};

/* Root Layout */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable}`}
    >
      <body>

        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>

      </body>
    </html>
  );
}
