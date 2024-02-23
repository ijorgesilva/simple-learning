import Image from "next/image";
import { CATEGORIES_ITEMS } from "@/app/components/Nav/constants";

export default function CategoryDetailPage(
    p: { 
      params: { category: keyof typeof CATEGORIES_ITEMS },
      searchParams: { date: string}
    }
  ) {

  const categoryItem = CATEGORIES_ITEMS[p.params.category];

  return (
    <>
      <div className="flex space-x-2">
        <Image 
          src={categoryItem.src} 
          alt={categoryItem.alt}
          className='w-10 h-10'
        />
        <h1 className="font-bold capitalize text-3xl">{categoryItem.title}</h1>
      </div>
      <section className="mt-5 max-w-screen-sm">
        {categoryItem.description}
      </section>
    </>
  );
}
