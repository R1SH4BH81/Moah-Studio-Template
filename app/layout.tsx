import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moah — Creative Studio",
  description: "A Creative Studio shaping the paths brands take next.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="min-h-screen bg-black text-[#121212] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
