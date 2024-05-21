import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { Container, Header, Image } from "@/UI/SUI";
import ImageBlock from "./components/imageBlock";
import AdvantagesBlock from "./components/advantagesBlock";
import DirectionsBlock from "./components/directionsBlock";
import GoalsBlock from "./components/goalsBlock";
import DirectorBlock from "./components/directorBlock";
import CoachesDecsBlock from "./components/coachesDescBlock";
import { useLocale, useTranslations } from "next-intl";

export default function AboutSchool() {
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
            key: "about-school",
            content: t('Breadcrumb.aboutSchool'),
            isLink: true,
            isActive: true,
            url: `/${locale}/about-school`,
        },
    ];
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <ImageBlock />
                <GoalsBlock />
                <AdvantagesBlock />
                <DirectorBlock />
                <CoachesDecsBlock />
                <DirectionsBlock />
            </>
        </Layout>
    );
}
