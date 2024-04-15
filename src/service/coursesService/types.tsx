export interface ICourseCardInfo {
    id: number;
    img: string;
    title: string;
    price: string;
    bid: string;
}

export interface ICourseCardInfoGroup {
    coursesInfo: Array<ICourseCardInfo>;
}
