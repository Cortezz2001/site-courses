export interface ICourseCardInfo {
    id: number;
    img: string;
    title: string;
    price: string;
}

export interface ICourseCardInfoGroup {
    coursesInfo: Array<ICourseCardInfo>;
}
