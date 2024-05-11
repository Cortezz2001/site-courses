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
    const courseInfo = await CourseDetailPageService.getCourses(params.id);
    metadata.title = courseInfo.title;
    metadata.description = courseInfo.desc;
    metadata.keywords = [courseInfo.title, courseInfo.format];

    return <CourseDetailsPage courseInfo={courseInfo} />;
}
