import { Coaches } from "@/screens/coaches/page";
import { CoachesService } from "@/service/coachesService/service";
import { ICoachCardInfo } from "@/service/coachesService/types";
import { LANGUAGES } from "@/service/consts";
import { Metadata } from "next";
import { cookies } from "next/headers";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "Тренеры - Lion IT School",
    description:
        "Познакомьтесь с высококвалифицированным преподавательским составом Lion IT School и выберите лучших специалистов для вашего обучения.",
    keywords: [
        "преподаватели",
        "Lion IT School",
        "преподавательский состав",
        "обучение",
        "специалисты",
        "тренеры",
    ],
};

export default async function Home() {
    const cookieStore = cookies()
    const languageCookie = cookieStore.get("NEXT_LOCALE");
    const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
    const coachesInfo_: ICoachCardInfo[] = await CoachesService.getCoaches(language)
    return <Coaches coachesInfo={coachesInfo_} />;
}
