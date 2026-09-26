import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Vibe Coders",
  description: "A club for curious minds. Build cool things, learn together, and find your people with The Vibe Coders.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
