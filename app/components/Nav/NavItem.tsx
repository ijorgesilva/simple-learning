'use client'

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { urlEncode } from "@/app/utils";
import { usePathname } from "next/navigation";

export function NavItem(p: {
  category: string,
  alt: string,
  src: StaticImageData,
  title: string,
}) {
  const path = usePathname();
  const isActive = '/courses/category/' + urlEncode(p.category) === path;
  const catRoute = '/courses/category/' + urlEncode(p.category);
  return (
    <Link href={catRoute} 
      className={
        `flex items-center h-12 gap-2 p-3 hover:bg-slate-800 transform transition hover:scale-105 rounded-xl
        ${ isActive && 'bg-slate-700' }
      `}
    >
      <div className="flex justify-center items-center rounded-full border border-slate-700 w-8 h-8">
        <Image src={p.src} alt={p.alt} className="h-7 w-7"/>
      </div>
      <span className="capitalize">{p.title}</span>
    </Link>
  );
}
