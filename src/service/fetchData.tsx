interface Challenges {
    id: number,
    text: string
}

interface Program {
    id: number,
    marker: string
    theme: string
}

interface Mentors {
    id: number,
    img: string,
    name: string
    desc: string
}

interface CourseData {
    id: number,
    img: string,
    title: string,
    desc: string,
    goal: string,
    challenges: Challenges[],
    program: Program[],
    mentors: Mentors[]
}

const templateObj: CourseData = {
    id: 1,
    img: "image",
    title: "title",
    desc: "desc",
    goal: "goal",
    challenges: [],
    program: [],
    mentors: []
}

const fetchData = {
    async getData(): Promise<CourseData> {
        try {
            const response = await fetch('https://api.npoint.io/9892bdea58cfc91d16fc');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data)
            return data;
          } catch (error) {
            console.error('Error fetching data:', error);
            return templateObj
          }
    }
}

export default fetchData

export type {CourseData}
