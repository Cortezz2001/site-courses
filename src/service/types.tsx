//Для одного курса
interface Course {
    id: number;
    bid: string;
    img: string;
    desc: string;
    goal: string;
    price: string;
    title: string;
    format: string;
    result: string;
    slug: string;
    created_at: Date;
}

//Для детальной информации о курсе
interface CourseDetail {
    id: number;
    skills: Skill[];
    controls: Control[];
    mentors: CourseMentor[];
    themes: Theme[];
    features: Feature[];
    knowhows: Knowhow[];
    challenges: Challenge[];
    bid: string;
    img: string;
    desc: string;
    goal: string;
    price: string;
    title: string;
    format: string;
    result: string;
    slug: string;
    created_at: Date;
}

interface Skill {
    id: number;
    text: string;
    course: number;
}

interface Control {
    id: number;
    item: string;
    course: number;
}

interface CourseMentor {
    id: number;
    name: string;
    exp: string;
    img: string;
    course: number;
}

interface Theme {
    id: number;
    theme: string;
    marker: string;
    course: number;
}

interface Feature {
    id: number;
    item: string;
    title: string;
    course: number;
}

interface Knowhow {
    id: number;
    text: string;
    course: number;
}

interface Challenge {
    id: number;
    text: string;
    course: number;
}

// Событие

interface Event {
    id: number;
    title: string;
    desc: string;
    img: string;
    format: string;
    startDate: string;
    startTime: string;
    createdAt: string;
}


//Для детальной информации о событии

interface EventDetail {
    id: number;
    mentors: EventsMentor[];
    title: string;
    desc: string;
    img: string;
    format: string;
    startDate: string;
    startTime: string;
    createdAt: string;
}

interface EventsMentor {
    id: number;
    name: string;
    event: number;
}

//Ментор
interface Mentor {
    id: number;
    name: string;
    exp: string;
    img: string;
    desc: string;
    role: string;
    education: string;
    created_at: Date;
}


//Для детальной информации о менторе

interface MentorDetail {
    id: number;
    courses: MentorsCourse[];
    name: string;
    exp: string;
    img: string;
    desc: string;
    role: string;
    education: string;
    created_at: Date;
}

interface MentorsCourse {
    id: number;
    title: string;
    mentor: number;
}