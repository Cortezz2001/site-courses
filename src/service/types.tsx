export interface ICoachCardInfo {
    id: number
    img: string
    name: string
    description: string
}

export interface ICoachCardInfoGroup{
    coachesInfo: Array<ICoachCardInfo>
}