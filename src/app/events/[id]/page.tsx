import { EventDetailsPage } from "@/screens/eventPage/page";
import { EventDetailPageService } from "@/service/eventDetailPageService/service";
import { IEventDetailPageInfo } from "@/service/eventDetailPageService/types";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "",
    description: "",
    keywords: [],
};

export default async function Home({ params }: { params: { id: number } }) {
    const eventInfo = await EventDetailPageService.getEvents(params.id);
    metadata.title = eventInfo.title;
    metadata.description = eventInfo.desc;
    metadata.keywords = [eventInfo.title, eventInfo.format];

    return <EventDetailsPage eventInfo={eventInfo} />;
}
