import { CourseDetailsPage } from "@/screens/coursePage/page";
import { LANGUAGES } from "@/service/consts";
import { CourseDetailPageService } from "@/service/courseDetailPageService/service";
import { ICourseDetailPageInfo } from "@/service/courseDetailPageService/types";
import { Metadata } from "next";
import { cookies } from "next/headers";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "",
    description: "",
    keywords: [],
};

export default async function Home({ params }: { params: { id: number } }) {
    const cookieStore = cookies()
    const languageCookie = cookieStore.get("NEXT_LOCALE");
    const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
    const courseInfo:ICourseDetailPageInfo = await CourseDetailPageService.getCourses(params.id, language);
    metadata.title = courseInfo.title;
    metadata.description = courseInfo.desc;
    metadata.keywords = [courseInfo.title, courseInfo.format];

    return <CourseDetailsPage courseInfo={courseInfo} />;
}
