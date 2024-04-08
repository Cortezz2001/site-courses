import { Main } from "@/screens/main/page";
import { CoachesService } from "@/service/coachesService/service";
import { CoursesService } from "@/service/coursesService/service";
import "semantic-ui-css/semantic.min.css";

export default async function Home() {
    const coaches_ = await CoachesService.getCoaches();
    const courses_ = await CoursesService.getCourses();

    return <Main coachesInfo={coaches_} coursesInfo={courses_} />;
}
