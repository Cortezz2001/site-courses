import { Main } from "@/screens/main/page";
import { BannersService } from "@/service/bannersService/service";
import { CoachesService } from "@/service/coachesService/service";
import { CoursesService } from "@/service/coursesService/service";
import { EventsService } from "@/service/eventsService/service";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "Школа информационных технологий Lion IT School",
    description:
        "Lion IT School предлагает курсы и интенсивы по информационным технологиям для всех уровней навыков. Присоединяйтесь к нашему сообществу и раскройте свой потенциал в сфере IT.",
    keywords: [
        "Lion IT School",
        "курсы информационных технологий",
        "обучение",
        "программирование",
        "веб-разработка",
        "IT",
    ],
};
export default async function Home() {
    const coaches_ = await CoachesService.getCoaches();
    const courses_ = await CoursesService.getCourses();
    const events_ = await EventsService.getEvents();
    const banners_ = await BannersService.getBanners();

    return (
        <Main
            coachesInfo={coaches_}
            coursesInfo={courses_}
            eventsInfo={events_}
            bannersInfo={banners_}
        />
    );
}
