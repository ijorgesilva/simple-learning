import { StaticImageData } from "next/image"

export interface CourseResponse {
  status: string
  totalResults: number
  results: Course[]
  nextPage: string
}

export interface Course {
  course_id: string
  title: string
  link: string
  keywords: string[]
  creator: string[]
  video_url: any
  description: string
  content: string
  pubDate: string
  image_url: string
  source_id: string
  source_priority: number
  country: string[]
  category: CourseCategory[]
  language: string
}

// Categories
export type CourseCategory = 
  | 'courses'
  | 'big_data'
  | 'crypto'
  | 'marketing'
  | 'music_production'
  | 'photography';

export interface Category {
  src: StaticImageData
  alt: string
  category: CourseCategory
  title: string
  description: string
}

export type CategoryItem = {
  [K in CourseCategory]: Partial<Category>
}