import { Course, CourseCategory, CourseResponse } from '@/app/types/course-type'
import { delayResponse } from '../lib/mock';

export class CoursesApi {
  private static readonly BASE_URL = process.env.API_BASE_URL;

  // Fetch Latest Courses
  static async fetchCourses(mockDelay?: number): Promise<Course[]>{
    const courseResponse = await this.fetchCourseResponse();
    return !mockDelay ? courseResponse.results : delayResponse(courseResponse.results, mockDelay);
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

  // Fetch by ID
  static async fetchById(id: number): Promise<Course> {
    const courseResponse = await this.fetchCoursesByIdResponse(id);
    return courseResponse.results[0];
  }
  private static async fetchCoursesByIdResponse(id: number): Promise<CourseResponse> {
    const response = await fetch(`${this.BASE_URL}/courses?course_id=${id}`);
    return response.json();
  }
}
