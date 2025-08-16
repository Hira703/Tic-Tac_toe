import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description: "Two-player local Tic-Tac-Toe built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
