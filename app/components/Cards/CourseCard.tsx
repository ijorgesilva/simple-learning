import Link from "next/link";
import Image from "next/image"
import { Course } from "@/app/types/course-type";
import { CATEGORIES_ITEMS } from "@/app/components/Nav/constants";
import { ImageWithFallback } from "../ImageWithFallback/ImageWithFallback";
import noImagePng from "@/public/no-image.png";

export default async function CourseCard(p : { course : Course }){

  return (
    <Link href={'/'} 
      title={`Read more`} 
      className="space-y-4 block w-60 hover:bg-slate-50 transition transform hover:scale-105 border-2 border-gray-100 pt-4 bg-4 px-6 rounded-xl shadow-sm"
    >
      <div className="capitalize">
        <div className="flex items-center gap-2">
          <div className="flex w-10 h-10 justify-center items-center border border-slate-300 rounded-full">
            <Image
              height={35} 
              width={35}
              className="w-5 h-5"
              src={CATEGORIES_ITEMS[p.course.category[0]]?.src || noImagePng} 
              alt={p.course.category[0]} 
            />
          </div>
          <div className="font-bod text-md">{ CATEGORIES_ITEMS[p.course.category[0]]?.title}</div>
        </div>
        <div className="mt-2 text-sm text-gray-400">Updated on {new Date(p.course.pubDate).toDateString()}</div>
      </div>

      <div>
        <h3 className="font-semibold text-xl line-clamp-2 h-14">{p.course.title}</h3>
        <div className="relative h-full min-h-32 overflow-hidden mb-4 mt-4">
          <ImageWithFallback
            className="aspect-video bg-black rounded-xl"
            src={ p.course.image_url || noImagePng } 
            alt=""
            fill={true}
            fallback={noImagePng}
          />
        </div>
      </div>
    </Link>
  )
}