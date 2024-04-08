import { Main } from "@/screens/main/page";
import { CoachesService } from "@/service/coachesService/service";
import { CoursesService } from "@/service/coursesService/service";
import { EventsService } from "@/service/eventsService/service";
import "semantic-ui-css/semantic.min.css";

export default async function Home() {
    const coaches_ = await CoachesService.getCoaches();
    const courses_ = await CoursesService.getCourses();
    const events_ = await EventsService.getEvents();

    return (
        <Main
            coachesInfo={coaches_}
            coursesInfo={courses_}
            eventsInfo={events_}
        />
    );
}
