import { Layout } from "@/layouts/layout";
import BannerCarousel from "./components/bannerCarousel";
import { Container, Header } from "@/UI/SUI";
export default function Main() {
    return (
        <Layout>
            <Container>
                <BannerCarousel />
                <Header as="h2">Курсы</Header>
                <Header as="h2">Наши тренеры</Header>
            </Container>
        </Layout>
    );
}
