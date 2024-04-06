import { Courses } from "@/screens/courses/page";
import { CoursesService } from "@/service/coursesService/service";
import "semantic-ui-css/semantic.min.css";

export default async function Home() {
    const courses_ = await CoursesService.getCourses();
    return <Courses coursesInfo={courses_} />;
}
