import Image from "next/image";
import Link from "next/link";
import logoPng from "@/public/logo.png";
import { NAV_ITEMS } from "./constants";
import { NavItem } from "./NavItem";

export function Nav() {
  return (
    <div className="mt-3 space-y-8 bg-slate-900 text-white rounded-xl p-6">
      <Link href='/' title="Go back to home">
        <Image src={logoPng} alt="Simple Learning App" className="w-40" />
      </Link>
      <nav>
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem.category} {...navItem} />
        ))}
      </nav>
    </div>
  );
}
