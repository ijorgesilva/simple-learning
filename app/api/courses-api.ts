import { Course, CourseCategory, CourseResponse } from '@/app/types/course-type'

export class CoursesApi {
  private static readonly BASE_URL = process.env.API_BASE_URL;

  // Fetch Latest Courses
  static async fetchCourses(): Promise<Course[]>{
    const courseResponse = await this.fetchCourseResponse();
    return courseResponse.results;
  }
  private static async fetchCourseResponse(): Promise<CourseResponse> {
    const response = await fetch(`${this.BASE_URL}/courses`);
    return response.json();
  }

  // Fetch by Category
  static async fetchByCategory(category: CourseCategory): Promise<Course[]> {
    const courseResponse = await this.fetchCoursesByCategoryResponse(category);
    return courseResponse.results;
  }
  private static async fetchCoursesByCategoryResponse(category: CourseCategory): Promise<CourseResponse> {
    const response = await fetch(`${this.BASE_URL}/courses?category=${category}`);
    return response.json();
  }

}
