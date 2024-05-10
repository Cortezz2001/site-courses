export interface ISelectedCoursesInfo {
    id: number;
    img: string;
    title: string;
    price: string;
}

export interface ISelectedCoursesInfoGroup {
    selectedCourses: Array<ISelectedCoursesInfo>;
}
