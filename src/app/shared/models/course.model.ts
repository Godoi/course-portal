export interface ICourse {
    id: string;
    description: string;
    longDescription: string;
    seqNo: number;
    iconUrl: string;
    price: number;
    uploadedImageUrl: string;
    courseListIcon: string;
    category: string;
    lessonsCount: number;
  }
  
  export function sortCoursesBySeqNo(c1: ICourse, c2: ICourse) {
    return c1.seqNo - c2.seqNo;
  }