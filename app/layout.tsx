import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pugal — AI Engineer & Creative Technologist",
  description:
    "Personal portfolio of Pugal — exploring artificial intelligence, software engineering, computer vision, and interactive systems.",
  keywords: [
    "Pugal",
    "AI Engineer",
    "Artificial Intelligence",
    "Software Engineering",
    "Computer Vision",
    "Portfolio",
  ],
  authors: [{ name: "Pugal" }],
  creator: "Pugal",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Pugal — AI Engineer & Creative Technologist",
    description:
      "A personal portfolio exploring AI, software engineering, computer vision, and interactive systems.",
    url: "https://example.com",
    siteName: "Pugal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pugal — AI Engineer & Creative Technologist",
    description:
      "Personal portfolio of Pugal — AI, software engineering, computer vision, and interactive systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
