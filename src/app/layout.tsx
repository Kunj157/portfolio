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
  title: "Kunj Patel — Software Engineer",
  description:
    "Software Engineer specializing in C++, full-stack development, CI/CD pipelines, and real-time systems. Based in Germany.",
  keywords: [
    "Kunj Patel",
    "Software Engineer",
    "Full Stack Developer",
    "C++",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Kunj Patel" }],
  openGraph: {
    title: "Kunj Patel — Software Engineer",
    description:
      "Software Engineer specializing in C++, full-stack development, CI/CD pipelines, and real-time systems.",
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
