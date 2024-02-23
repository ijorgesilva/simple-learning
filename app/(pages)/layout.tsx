import type { Metadata } from "next";
import { Nav } from "@/app/components/Nav/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex p-8">
        <Nav />
        <main className="mt-8 px-8">{children}</main>
      </body>
    </html>
  );
}
