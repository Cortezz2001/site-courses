export interface ICourseDetailPageInfo {
    id: number;
    img: string;
    title: string;
    price: string;
    desc: string;
    goal: string;
    format: string;
    timeline: string;
    result: string;
    control: string;
    mentors: Array<IMentors>;
    program: Array<IProgram>;
    challenges: Array<IChallenges>;
    skills: Array<ISkills>;
    features: Array<IFeatures>;
    knowhows: Array<IKnowhows>;
}

export interface ICourseDetailPageInfoGroup {
    courseInfo: Array<ICourseDetailPageInfo>;
}

export interface IMentors {
    id: number;
    exp: string;
    img: string;
    name: string;
}

export interface IProgram {
    id: number;
    theme: string;
    marker: string;
}

export interface IChallenges {
    id: number;
    text: string;
}

export interface ISkills {
    id: number;
    text: string;
}

export interface IFeatures {
    id: number;
    item: string;
    title: string;
}

export interface IKnowhows {
    id: number;
    text: string;
}
