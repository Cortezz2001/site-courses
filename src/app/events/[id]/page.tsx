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
    const eventInfo_ = await EventDetailPageService.getEvents();
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
    eventInfo_.forEach((eventInfo) => {
        if (eventInfo.id === Number(params.id)) {
            activePage = eventInfo;
        }
    });
    metadata.title = activePage.title;
    metadata.description = activePage.desc;
    metadata.keywords = [activePage.title, activePage.format];

    return <EventDetailsPage eventInfo={activePage} />;
}
