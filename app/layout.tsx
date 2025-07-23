import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Saira } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import config from "../next.config"

const sans = Saira({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matteo Papa - Portfolio",
  description: "Portfolio Website of Matteo Papa",
icons: {
  icon: [
    { url: config.basePath + "/img/white_logo.png", sizes: "32x32", type: "image/png" },
  ],
},

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} scrollbar-thin scrollbar-thumb-neutral-400 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
