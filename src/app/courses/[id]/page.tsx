import { CourseDetailsPage } from "@/screens/coursePage/page";
import { CourseDetailPageService } from "@/service/courseDetailPageService/service";
import { ICourseDetailPageInfo } from "@/service/courseDetailPageService/types";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "",
    description: "",
    keywords: [],
};

export default async function Home({ params }: { params: { id: number } }) {
    let activePage: ICourseDetailPageInfo = {
        id: 0,
        img: "",
        title: "",
        price: "",
        desc: "",
        goal: "",
        format: "",
        timeline: "",
        result: "",
        control: "",
        mentors: [],
        program: [],
        challenges: [],
        skills: [],
        features: [],
        knowhows: [],
    };
    const courseInfo = await CourseDetailPageService.getCourses(params.id);
    metadata.title = activePage.title;
    metadata.description = activePage.desc;
    metadata.keywords = [activePage.title, activePage.format];

    return <CourseDetailsPage courseInfo={courseInfo} />;
}
