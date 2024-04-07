import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { Container, Header } from "@/UI/SUI";
import ImageBlock from "./components/imageBlock";
import LearningPath from "./components/learningPath";
import ContactForm from "./components/contactForm";

export default function Intensives() {
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: "Главная",
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "intensives",
            content: "Летние интенсивы",
            isLink: true,
            isActive: true,
            url: "/intensives",
        },
    ];
    return (
        <Layout>
            <Container>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    Летние интенсивы
                </Header>
                <ImageBlock />
                <LearningPath />
                <ContactForm />
            </Container>
        </Layout>
    );
}
