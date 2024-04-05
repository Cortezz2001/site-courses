import { Coaches } from "@/screens/coaches/page";
import { CoachesService } from "@/service/coachesService/service";
import { ICoachCardInfo } from "@/service/coachesService/types";
import "semantic-ui-css/semantic.min.css";

const coaches: Array<ICoachCardInfo> = [
    {
        id: 1,
        img: "example-course-photo.jpg",
        name: "coach 1",
        exp: "Description 1",
    },
    {
        id: 2,
        img: "example-course-photo.jpg",
        name: "coach 2",
        exp: "Description 2",
    },
    {
        id: 3,
        img: "123.jpg",
        name: "coach 3",
        exp: "Description 3",
    },
    {
        id: 4,
        img: "example-course-photo.jpg",
        name: "coach 4",
        exp: "Description 4",
    },
    {
        id: 5,
        img: "logo.png",
        name: "coach 5",
        exp: "Description 5",
    },
    {
        id: 6,
        img: "logo.png",
        name: "coach 6",
        exp: "Description 5",
    },
    {
        id: 7,
        img: "123.jpg",
        name: "coach 7",
        exp: "Description 5",
    },
    {
        id: 8,
        img: "image.png",
        name: "coach 8",
        exp: "Description 5",
    },
];

export default async function Home() {
    const coaches_ = await CoachesService.getCoaches();
    return <Coaches coachesInfo={coaches_} />;
}
