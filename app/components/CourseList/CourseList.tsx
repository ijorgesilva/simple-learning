import { Course } from "@/app/types/course-type";
import CourseCard from "../Cards/CourseCard";

export default function CourseList( p : { courses : Course[] }){
  return(
    <>
      <div className="flex justify-center flex-wrap gap-8 md:justify-normal">
        {p.courses.map( c => (
          <CourseCard key={c.course_id} course={c}/>
        ))}
      </div>
    </>
  );
}