import { Course, CourseResponse } from '@/app/types/course-type'

export class CoursesApi {
  private static readonly BASE_URL = "http://localhost:3090";

  static async fetchCourses(): Promise<Course[]>{
    const courseResponse = await this.fetchCourseResponse();
    return courseResponse.results;
  }

  private static async fetchCourseResponse(): Promise<CourseResponse> {
    const response = await fetch(`${this.BASE_URL}/courses`);
    return response.json();
  }

}
