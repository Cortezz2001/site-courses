import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { Container, Header } from "@/UI/SUI";
import ImageBlock from "./components/imageBlock";
import LearningPath from "./components/learningPath";
import ContactForm from "./components/contactForm";
import { useLocale, useTranslations } from "next-intl";

export default function Intensives() {
    const t = useTranslations();
    const locale = useLocale();
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: t('Breadcrumb.main'),
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "intensives",
            content: t('Breadcrumb.intensives'),
            isLink: true,
            isActive: true,
            url: `/${locale}/intensives`,
        },
    ];

    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    {t('IntensivesPage.title')}
                </Header>
                <ImageBlock />
                <LearningPath />
                <ContactForm />
            </>
        </Layout>
    );
}
