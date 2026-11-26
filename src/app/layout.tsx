import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redoy1491.vercel.app"),
  title: "Ashraful Islam Redoy",
  openGraph: {
    title: "Ashraful Islam Redoy",
    url: "https://redoy1491.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-logo.png",
        width: 256,
        height: 256,
        alt: "AIR Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ashraful Islam Redoy",
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans selection:bg-sky-500/20 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
