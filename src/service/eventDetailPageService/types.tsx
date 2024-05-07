export interface IEventDetailPageInfo {
    id: number;
    img: string;
    desc: string;
    title: string;
    format: string;
    startDate: string;
    startTime: string;
    mentors: Array<IMentors>;
}

export interface IEventDetailPageInfoGroup {
    eventInfo: Array<IEventDetailPageInfo>;
}

export interface IMentors {
    id: number;
    name: string;
}
