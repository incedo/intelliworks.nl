import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], style: ["italic"] });

const title = "IntelliWorks — Drive growth with experts + AI";
const description = "We unite experienced people and practical AI to help European organisations grow on technology they can truly own.";

export const metadata: Metadata = {
  metadataBase: new URL("https://intelliworks.nl"),
  title,
  description,
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntelliWorks — Drive growth. Humanly intelligent." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${playfair.variable}`}>{children}</body></html>;
}
