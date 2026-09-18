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
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-black text-[#121212] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
