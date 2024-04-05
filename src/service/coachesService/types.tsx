export interface ICoachCardInfo {
    id: number
    img: string
    name: string
    exp: string
}

export interface ICoachCardInfoGroup{
    coachesInfo: Array<ICoachCardInfo>
}