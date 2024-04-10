export interface ICoachDetailPageInfo {
    id: number;
    img: string;
    name: string;
    role: string;
    education: string;
    exp: string;
    desc: string;
    courses: Array<ICourses>;
}

export interface ICoachDetailPageInfoGroup {
    coachInfo: Array<ICoachDetailPageInfo>;
}

export interface ICourses {
    id: number;
    title: string;
}
