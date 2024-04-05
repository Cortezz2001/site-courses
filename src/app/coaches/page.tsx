import { Coaches } from "@/screens/coaches/page";
import { ICoachCardInfo } from "@/service/types";
import "semantic-ui-css/semantic.min.css";

const coaches: Array<ICoachCardInfo> = [
    {
        id: 1,
        img: "example-course-photo.jpg",
        name: "coach 1",
        description: "Description 1",
    },
    {
        id: 2,
        img: "example-course-photo.jpg",
        name: "coach 2",
        description: "Description 2",
    },
    {
        id: 3,
        img: "123.jpg",
        name: "coach 3",
        description: "Description 3",
    },
    {
        id: 4,
        img: "example-course-photo.jpg",
        name: "coach 4",
        description: "Description 4",
    },
    {
        id: 5,
        img: "logo.png",
        name: "coach 5",
        description: "Description 5",
    },
    {
        id: 6,
        img: "logo.png",
        name: "coach 6",
        description: "Description 5",
    },
    {
        id: 7,
        img: "123.jpg",
        name: "coach 7",
        description: "Description 5",
    },
    {
        id: 8,
        img: "image.png",
        name: "coach 8",
        description: "Description 5",
    },
];

export default function Home() {
    return <Coaches coachesInfo={coaches} />;
}
