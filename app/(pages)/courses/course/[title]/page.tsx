import { CoursesApi } from "@/app/api/courses-api";
import { ImageWithFallback } from "@/app/components/ImageWithFallback/ImageWithFallback";
import { CATEGORIES_ITEMS } from "@/app/components/Nav/constants";
import { Course, Category } from "@/app/types/course-type";
import noImagePng from "@/public/no-image.png";

export default async function CourseDetails( p: { params: {id: number}}){
  const course: Course = await CoursesApi.fetchById(p.params.id);
  const categoryDetails: Category = CATEGORIES_ITEMS[course.category[0]];

  return (
    <article>
      <div className="relative p-3 pt-0 h-80 w-full">
        <ImageWithFallback
          className="rounded-xl"
          src={course.image_url}
          alt={course.title}
          fallback={noImagePng}
          fill
        />
      </div>
      <h1 className="">{course.title}</h1>
      <small>{categoryDetails.title}</small>

      <div className="max-w-6xl prose">{course.description}</div>
    </article>
  );
}