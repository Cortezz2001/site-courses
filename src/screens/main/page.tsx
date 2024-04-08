import { ICoachCardInfo } from "@/service/coachesService/types";
import { ICourseCardInfo } from "@/service/coursesService/types";
import { Layout } from "@/layouts/layout";
import BannerCarousel from "./components/bannerCarousel";
import { CoachesCarousel } from "./components/coachesCarousel";
import { CoursesCarousel } from "./components/coursesCarousel";
import { Container, Header } from "@/UI/SUI";

interface MainProps {
    coachesInfo: ICoachCardInfo[];
    coursesInfo: ICourseCardInfo[];
}

export const Main: React.FC<MainProps> = ({ coachesInfo, coursesInfo }) => {
    return (
        <Layout>
            <Container>
                <BannerCarousel />
                <Header as="h2">Курсы</Header>
                <CoursesCarousel coursesInfo={coursesInfo} />
                <Header as="h2">Наши тренеры</Header>
                <CoachesCarousel coachesInfo={coachesInfo} />
            </Container>
        </Layout>
    );
};
