import { Instructor } from "./Instructor";

export type course = {
    slug: string,
    department: string,
    courseName: string,
    shortCourseDescription: string,
    courseDescription: string,
    sales: number,
    coursePrice: number,
    discountedPrice?: number,
    courseDuration: string,
    numberofLessons: number,
    courseImage: {
      id: string,
      alt: string,
      filename: string,
      mimetype: string,
      filesize: number,
      width: number,
      height: number,
      focalX: number,
      focalY: number,
      createdAt: string,
      updatedAt: string,
      url: string,
    },
    rating: number,
    courseContent: {content: string, id: string}[],
    instructors: Instructor[],

}