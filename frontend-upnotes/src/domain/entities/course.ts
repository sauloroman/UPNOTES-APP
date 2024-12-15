export interface CreateCourse {
  name: string;
  color: string;
  period: number;
  categories: string[]
}

export interface Course {
  id: string;
  name: string;
  color: string;
  isFavorite: boolean;
  createdAt: Date;
  image: string | null;
  description: string | null;
  period: {
    numberPeriod: number;
  }
  professor: string | null;
  categories: string[]
}

export interface CoursesResponse {
  page: number;
  totalCourses: number;
  coursesInThisPage: number;
  totalPages: number;
  courses: Course[]
}