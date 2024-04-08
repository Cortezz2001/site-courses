import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { Layout } from "@/layouts/layout";
import BannerCarousel from "./components/bannerCarousel";
import { CoachesCarousel } from "./components/coachesCarousel";
import { Container, Header } from "@/UI/SUI";

export const Main: React.FC<ICoachCardInfoGroup> = ({ coachesInfo }) => {
    return (
        <Layout>
            <Container>
                <BannerCarousel />
                <Header as="h2">Курсы</Header>
                <Header as="h2">Наши тренеры</Header>
                <CoachesCarousel coachesInfo={coachesInfo} />
            </Container>
        </Layout>
    );
};
