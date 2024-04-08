import { ICoachCardInfo } from "@/service/coachesService/types";
import { ICourseCardInfo } from "@/service/coursesService/types";
import { IEventCardInfo } from "@/service/eventsService/types";
import { Layout } from "@/layouts/layout";
import BannerCarousel from "./components/bannerCarousel";
import { CoachesCarousel } from "./components/coachesCarousel";
import { CoursesCarousel } from "./components/coursesCarousel";
import { EventsCarousel } from "./components/eventsCarousel";
import { Container, Header } from "@/UI/SUI";

interface MainProps {
    coachesInfo: ICoachCardInfo[];
    coursesInfo: ICourseCardInfo[];
    eventsInfo: IEventCardInfo[];
}

export const Main: React.FC<MainProps> = ({
    coachesInfo,
    coursesInfo,
    eventsInfo,
}) => {
    return (
        <Layout>
            <Container>
                <BannerCarousel />
                <Header as="h2">Курсы</Header>
                <CoursesCarousel coursesInfo={coursesInfo} />
                <Header as="h2">Наши тренеры</Header>
                <CoachesCarousel coachesInfo={coachesInfo} />
                <Header as="h2">Анонсы наших мероприятий</Header>
                <EventsCarousel eventsInfo={eventsInfo} />
            </Container>
        </Layout>
    );
};
