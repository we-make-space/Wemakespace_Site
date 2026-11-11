import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://wemakespace.org"),
  title: {
    default: "Wemakespace - Making room for you!",
    template: "%s | Wemakespace",
  },
  description:
    "Wemakespace builds high-performance software: web, mobile, AI, and Web3. We engineer digital products and platforms.",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Wemakespace",
    description:
      "Wemakespace builds high-performance software: web, mobile, AI, and Web3. We engineer digital products and platforms.",
    url: "https://wemakespace.org",
    images: ["/wemakespacelogoparty.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wemakespace",
    description: "Innovative tech solutions for the digital-first world.",
    images: ["/wemakespacelogoparty.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF5E36" },
    { media: "(prefers-color-scheme: dark)", color: "#3C3C3C" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.variable} ${syne.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
