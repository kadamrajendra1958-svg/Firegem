import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue OS",
  description: "The definitive operating system for high-stakes revenue teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
