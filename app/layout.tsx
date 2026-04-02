import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World Agentic Frontend",
  description: "Next.js + ShadCN + Tailwind + Playwright setup",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}