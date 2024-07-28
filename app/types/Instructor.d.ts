export type Instructor = {
    id: string,
    instructorName: string,
    bio?: string,
    profileImage?: {
      id: string,
      alt: string,
      filename: string,
      mimeType: string,
      filesize: number,
      width: number,
      height: number,
      focalX: number,
      focalY: number,
      createdAt: string,
      updatedAt: string,
      url: string,
    }
  };
  