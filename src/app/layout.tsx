import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../fonts/PPPangramSansRounded-Light.otf",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Йога студия YogaHome",
  description: "Профессиональная студия йоги",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
