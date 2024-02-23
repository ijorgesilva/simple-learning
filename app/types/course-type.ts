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
  category: string[]
  language: string
}