import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import { Nav } from "@/app/components/Nav/Nav";
import "./(pages)/globals.css";

const roboto = Roboto({weight: ['400','300','100'], subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Simple Courses',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex p-8`}>
        <Nav />
        <main className="relative mt-8 px-8 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
