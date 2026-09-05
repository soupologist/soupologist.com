import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Kept for the occasional serif accent (pull quotes). Not the body face.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

// The workhorse: body, headings, UI, everything.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Ultra-condensed display face. Only used above ~text-6xl, so three weights
// is plenty — no point shipping all nine.
const humane = localFont({
  variable: "--font-humane",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/humane/Humane-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/humane/Humane-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/humane/Humane-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "soupologist",
    template: "%s — soupologist",
  },
  description: "Ashish's little corner of the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${plexMono.variable} ${humane.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
