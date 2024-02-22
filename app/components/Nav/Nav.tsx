import Image from "next/image";

import logoPng from "@/public/logo.png";
import { NAV_ITEMS } from "./constants";
import { NavItem } from "./NavItem";

export function Nav() {
  return (
    <div>
      <Image src={logoPng} alt="Simple Learning App" className="w-40" />
      <nav>
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem.category} {...navItem} />
        ))}
      </nav>
    </div>
  );
}
