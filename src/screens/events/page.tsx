import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { IEventCardInfoGroup } from "@/service/eventsService/types";
import { Container, Header } from "@/UI/SUI";
import { GroupEventsCards } from "./components/groupEvents";

const BreadcrumbProps: Array<IBreadCrumb> = [
    {
        key: "Home",
        content: "Главная",
        isLink: true,
        isActive: false,
        url: "/",
    },
    {
        key: "Events",
        content: "Анонсы",
        isLink: true,
        isActive: true,
        url: "/events",
    },
];

export const Events: React.FC<IEventCardInfoGroup> = ({ eventsInfo }) => {
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    Мероприятия
                </Header>
                <GroupEventsCards eventsInfo={eventsInfo} />
            </>
        </Layout>
    );
};
