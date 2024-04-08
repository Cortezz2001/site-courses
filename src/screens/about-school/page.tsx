import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { Container, Header, Image } from "@/UI/SUI";
import ImageBlock from "./components/imageBlock";
import AdvantagesBlock from "./components/advantagesBlock";
import DirectionsBlock from "./components/directionsBlock";
import GoalsBlock from "./components/goalsBlock";
import DirectorBlock from "./components/directorBlock";

export default function AboutSchool() {
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: "Главная",
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "about-school",
            content: "О нашей школе",
            isLink: true,
            isActive: true,
            url: "/about-school",
        },
    ];
    return (
        <Layout>
            <Container>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <ImageBlock />
                <GoalsBlock />
                <AdvantagesBlock />
                <DirectorBlock />
                <DirectionsBlock />
            </Container>
        </Layout>
    );
}
