export interface IEventCardInfo {
    id: number;
    img: string;
    title: string;
    startDate: string;
    startTime: string;
}

export interface IEventCardInfoGroup {
    eventsInfo: Array<IEventCardInfo>;
}
