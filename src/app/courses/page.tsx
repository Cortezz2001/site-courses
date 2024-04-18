import { Courses } from "@/screens/courses/page";
import { CoursesService } from "@/service/coursesService/service";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "Курсы - Lion IT School",
    description:
        "Изучайте широкий спектр курсов по информационным технологиям в Lion IT School",
    keywords: [
        "курсы",
        "Lion IT School",
        "информационные технологии",
        "обучение",
        "обучение программированию",
        "Айти курсы",
    ],
};

export default async function Home() {
    const courses_ = await CoursesService.getCourses();
    return <Courses coursesInfo={courses_} />;
}
