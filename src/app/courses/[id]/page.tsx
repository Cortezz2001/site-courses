import { CourseDetailsPage } from "@/screens/coursePage/page";
import { CourseDetailPageService } from "@/service/courseDetailPageService/service";
import { ICourseDetailPageInfo } from "@/service/courseDetailPageService/types";
import "semantic-ui-css/semantic.min.css";

export default async function Home({ params }: { params: { id: number } }) {
    const courseInfo_ = await CourseDetailPageService.getCourses();
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
    courseInfo_.forEach((courseinfo) => {
        if (courseinfo.id === Number(params.id)) {
            activePage = courseinfo;
        }
    });

    return <CourseDetailsPage courseInfo={activePage} />;
}
