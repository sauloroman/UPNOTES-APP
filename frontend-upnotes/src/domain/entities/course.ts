export interface CreateCourse {
  name: string;
  color: string;
  period: number;
  categories: string[]
}

export interface UpdateCourse {
  name?: string;
  color?: string;
  period?: number;
  categories?: string[];
  professor?: string[];
  isFavorite?: boolean;
  image?: string;
  description?: string;
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

export interface CourseAction {
  msg: string;
  course: Course;
}

export interface CoursesResponse {
  page: number;
  totalCourses: number;
  coursesInThisPage: number;
  totalPages: number;
  courses: Course[]
}