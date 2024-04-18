import { Coaches } from "@/screens/coaches/page";
import { CoachesService } from "@/service/coachesService/service";
import { ICoachCardInfo } from "@/service/coachesService/types";
import { Metadata } from "next";
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
    const coaches_ = await CoachesService.getCoaches();
    return <Coaches coachesInfo={coaches_} />;
}
