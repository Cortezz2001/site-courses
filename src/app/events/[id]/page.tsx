import { EventDetailsPage } from "@/screens/eventPage/page";
import { LANGUAGES } from "@/service/consts";
import { EventDetailPageService } from "@/service/eventDetailPageService/service";
import { IEventDetailPageInfo } from "@/service/eventDetailPageService/types";
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
    const languageCookie = cookieStore.get("language");
    const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
    const eventInfo:IEventDetailPageInfo = await EventDetailPageService.getEvents(params.id, language);
    metadata.title = eventInfo.title;
    metadata.description = eventInfo.desc;
    metadata.keywords = [eventInfo.title, eventInfo.format];

    return <EventDetailsPage eventInfo={eventInfo} />;
}
