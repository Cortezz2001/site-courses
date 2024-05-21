import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { IEventCardInfoGroup } from "@/service/eventsService/types";
import { Container, Header } from "@/UI/SUI";
import { GroupEventsCards } from "./components/groupEvents";
import { useLocale, useTranslations } from "next-intl";



export const Events: React.FC<IEventCardInfoGroup> = ({ eventsInfo }) => {
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
            key: "Events",
            content: t('Breadcrumb.events'),
            isLink: true,
            isActive: true,
            url: `/${locale}/events`,
        },
    ];
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    {t('EventsPage.title')}
                </Header>
                <GroupEventsCards eventsInfo={eventsInfo} />
            </>
        </Layout>
    );
};
