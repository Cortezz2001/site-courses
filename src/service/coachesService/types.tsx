export interface ICoachCardInfo {
    id: number;
    img: string;
    name: string;
    role: string;
}

export interface ICoachCardInfoGroup {
    coachesInfo: Array<ICoachCardInfo>;
}
