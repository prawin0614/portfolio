import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prawin A — Software Developer",
  description: "Portfolio of Prawin A, a 2026 BCA graduate focused on Java, Python and full-stack development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}