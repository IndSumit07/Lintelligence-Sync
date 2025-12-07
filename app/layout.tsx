import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lintelligence Live",
  description: "An Collaborative Coding Platform Powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.variable} antialiased`}>
        {/* <div className="w-full h-screen fixed z-0 flex justify-center items-center text-3xl md:text-7xl opacity-10 font-black">
          Lintelligence Sync
        </div> */}
        {children}
      </body>
    </html>
  );
}
