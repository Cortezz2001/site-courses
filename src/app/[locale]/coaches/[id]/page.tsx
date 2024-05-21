import { CoachDetailsPage } from "@/screens/coachPage/page";
import { CoachDetailPageService } from "@/service/coachDetailPageService/service";
import { ICoachDetailPageInfo } from "@/service/coachDetailPageService/types";
import { LANGUAGES } from "@/service/consts";
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
    const coachInfo: ICoachDetailPageInfo = await CoachDetailPageService.getCoaches(params.id, language)

    metadata.title = coachInfo.name;
    metadata.description = coachInfo.desc;
    metadata.keywords = [coachInfo.name, coachInfo.role];

    return <CoachDetailsPage coachInfo={coachInfo} />;
}
