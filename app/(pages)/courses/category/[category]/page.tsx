import CourseList from "@/app/components/CourseList/CourseList";
import { CoursesApi } from "@/app/api/courses-api";
import { ImageWithFallback } from "@/app/components/ImageWithFallback/ImageWithFallback";
import noImagePng from "@/public/no-image.png";
import { CourseCategory } from "@/app/types/course-type";
import { CATEGORIES_ITEMS } from "@/app/components/Nav/constants";
import { NAV_ITEMS } from "@/app/components/Nav/constants";

// export const revalidate = 1000;
// export function generateStaticParams(){
//   return NAV_ITEMS.map( (navItem) => {
//     return {
//       category: navItem.category
//     }
//   })
// }
// export const dynamic='force-dynamic'
export default async function CategoryDetailPage(
    p: { 
      params: { category: CourseCategory },
      searchParams: { date: string}
    }
  ) {
  const categoryItem = CATEGORIES_ITEMS[p.params.category];
  const coursesByCategory = await CoursesApi.fetchByCategory(categoryItem.category);

  return (
    <>
      <div className="flex space-x-2">
        <ImageWithFallback 
          src={categoryItem.src} 
          alt={categoryItem.alt}
          className='w-10 h-10'
          fallback={noImagePng}
        />
        <h1 className="font-bold capitalize text-3xl">{categoryItem.title}</h1>
      </div>
      <section className="mt-5 max-w-screen-sm">
        {categoryItem.description}
      </section>
      <section className="mt-5">
        {
          coursesByCategory ? 
            <CourseList courses={coursesByCategory}/>
          : <p className="flex text-gray-400 justify-center mt-10">No courses found 😔</p>
        }
      </section>
    </>
  );
}
