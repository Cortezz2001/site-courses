import { Events } from "@/screens/events/page";
import { EventsService } from "@/service/eventsService/service";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "Анонсы - Lion IT School",
    description:
        "Будьте в курсе последних событий и анонсов в Lion IT School. Узнайте о предстоящих мероприятиях, курсах, вебинарах и других интересных событиях.",
    keywords: [
        "анонсы",
        "события",
        "мероприятия",
        "Lion IT School",
        "курсы",
        "вебинары",
    ],
};
export default async function Home() {
    const events_ = await EventsService.getEvents();
    return <Events eventsInfo={events_} />;
}
