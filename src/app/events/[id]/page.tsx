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
    let activePage: IEventDetailPageInfo = {
        id: 0,
        img: "",
        desc: "",
        title: "",
        format: "",
        startDate: "",
        startTime: "",
        mentors: [],
    };
    const eventInfo = await EventDetailPageService.getEvents(params.id);
    metadata.title = activePage.title;
    metadata.description = activePage.desc;
    metadata.keywords = [activePage.title, activePage.format];

    return <EventDetailsPage eventInfo={eventInfo} />;
}
