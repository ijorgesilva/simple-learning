import { CoursesApi } from "@/app/api/courses-api";

export default async function Home() {
  const courses = await CoursesApi.fetchCourses();
  return <div>{JSON.stringify(courses)}</div>;
}
