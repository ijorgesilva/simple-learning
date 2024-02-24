import Image from 'next/image'
import { CoursesApi } from "@/app/api/courses-api";
import CourseList from "../components/CourseList/CourseList";
import latestImagePng from '@/public/latest.png'
export const dynamic = 'force-dynamic';

export default async function Home() {
  const courses = await CoursesApi.fetchCourses();
  return (
    <>
      <div className="flex items-center space-x-2 mb-12">
        <Image width={60} height={60} src={latestImagePng} alt="Latest Image" />
        <h1 className="text-4xl font-bold capitalize">Latest Courses</h1>
      </div>
      <CourseList courses={courses}/>
    </>
  );
}
