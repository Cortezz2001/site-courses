import { Events } from "@/screens/events/page";
import { EventsService } from "@/service/eventsService/service";
import "semantic-ui-css/semantic.min.css";

export default async function Home() {
    const events_ = await EventsService.getEvents();
    return <Events eventsInfo={events_} />;
}
