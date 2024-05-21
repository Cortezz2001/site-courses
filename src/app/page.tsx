import { Main } from "@/screens/main/page";
import { BannersService } from "@/service/bannersService/service";
import { CoachesService } from "@/service/coachesService/service";
import { ICoachCardInfo } from "@/service/coachesService/types";
import { LANGUAGES } from "@/service/consts";
import { CoursesService } from "@/service/coursesService/service";
import { ICourseCardInfo } from "@/service/coursesService/types";
import { EventsService } from "@/service/eventsService/service";
import { IEventCardInfo } from "@/service/eventsService/types";
import { Metadata } from "next";
import { cookies } from "next/headers";
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
    const cookieStore = cookies()
    const languageCookie = cookieStore.get("language");
    const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
    const coaches_: ICoachCardInfo[] = await CoachesService.getCoaches(language)
    const courses_: ICourseCardInfo[] = await CoursesService.getCourses(language);
    const events_: IEventCardInfo[] = await EventsService.getEvents(language);
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
