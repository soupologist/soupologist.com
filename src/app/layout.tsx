import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

const neueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/neue-montreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-montreal/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

const ppFragmentGlare = localFont({
  src: [
    {
      path: "../../public/fonts/pp-fragment/PPFragment-GlareRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pp-fragment/PPFragment-GlareExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-fragment-glare",
});

const ppFragmentSans = localFont({
  src: [
    {
      path: "../../public/fonts/pp-fragment/PPFragment-SansLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/pp-fragment/PPFragment-SansRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pp-fragment/PPFragment-SansExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-fragment-sans",
});

const ppFragmentSerif = localFont({
  src: [
    {
      path: "../../public/fonts/pp-fragment/PPFragment-SerifRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pp-fragment/PPFragment-SerifLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/pp-fragment/PPFragment-SerifExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-fragment-serif",
});

export const metadata: Metadata = {
  title: "soupologist",
  description: "made by sav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ppFragmentGlare.variable} ${ppFragmentSans.variable} ${ppFragmentSerif.variable} ${neueMontreal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
