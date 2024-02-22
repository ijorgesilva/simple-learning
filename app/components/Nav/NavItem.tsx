import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export function NavItem(p: {
  category: string;
  alt: string;
  src: StaticImageData;
}) {
  return (
    <Link href={"/articles/category/" + p.category}>
      <Image src={p.src} alt={p.alt} />
      <span>{p.category}</span>
    </Link>
  );
}
