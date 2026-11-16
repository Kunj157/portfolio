import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kunj Patel — Software Engineer · ML / Computer Vision",
  description:
    "Software Engineer working on machine learning, computer vision and real-time perception systems in Python and C++. MSc Computer Science student based in Germany.",
  keywords: [
    "Kunj Patel",
    "Software Engineer",
    "Machine Learning",
    "Computer Vision",
    "PyTorch",
    "YOLO",
    "C++",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Kunj Patel" }],
  openGraph: {
    title: "Kunj Patel — Software Engineer · ML / Computer Vision",
    description:
      "Software Engineer working on machine learning, computer vision and real-time perception systems in Python and C++.",
    type: "website",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
