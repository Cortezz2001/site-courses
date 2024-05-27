import {
    Grid,
    GridColumn,
    GridRow,
    Header,
    Image,
    List,
    ListContent,
    ListHeader,
    ListIcon,
    ListItem,
    Segment,
} from "@/UI/SUI";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { IEventDetailPageInfo } from "@/service/eventDetailPageService/types";
import { useLocale, useTranslations } from "next-intl";

import style from "./style.module.css";

interface IEventDetailPageProps {
    eventInfo: IEventDetailPageInfo;
}

export function EventDetailsPage({ eventInfo }: IEventDetailPageProps) {
    const t = useTranslations();
    const locale = useLocale();
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: t("Breadcrumb.main"),
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Events",
            content: t("Breadcrumb.events"),
            isLink: true,
            isActive: false,
            url: `/${locale}/events`,
        },
        {
            key: "EventPage",
            content: eventInfo.title,
            isLink: true,
            isActive: true,
            url: "",
        },
    ];
    console.log(eventInfo);
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    {eventInfo.title}
                </Header>
                <Image
                    rounded
                    src={eventInfo.img}
                    alt="course image"
                    centered
                    className={style.event_image}
                />
                <Grid>
                    <GridRow className={style.event_intro_container}>
                        <GridColumn className={style.event_intro_details}>
                            <Segment
                                raised
                                style={{
                                    fontSize: "large",
                                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                                    height: "100%",
                                    padding: "30px",
                                    borderRadius: "10px",
                                }}
                            >
                                <Header
                                    as="h2"
                                    style={{ marginBottom: "30px" }}
                                >
                                    {t("EventDetailPage.desc")}
                                </Header>
                                <p> {eventInfo.desc}</p>
                            </Segment>
                        </GridColumn>
                        <GridColumn className={style.event_intro_date}>
                            <Segment
                                raised
                                style={{
                                    fontSize: "large",
                                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                                    height: "100%",
                                    padding: "30px",
                                    borderRadius: "10px",
                                }}
                            >
                                <Header
                                    as="h2"
                                    style={{ marginBottom: "30px" }}
                                >
                                    {t("EventDetailPage.date")}
                                </Header>
                                <p>
                                    {" "}
                                    {eventInfo.startDate} {eventInfo.startTime}
                                </p>
                                <p> {eventInfo.format}</p>
                            </Segment>
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn>
                            <Segment
                                raised
                                style={{
                                    fontSize: "large",
                                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                                    height: "100%",
                                    padding: "30px",
                                    borderRadius: "10px",
                                }}
                            >
                                <Header
                                    as="h2"
                                    style={{ marginBottom: "30px" }}
                                >
                                    {t("EventDetailPage.coaches")}
                                </Header>
                                {eventInfo.active_mentors.map(
                                    (active_mentor, index) => (
                                        <List key={index}>
                                            <ListItem as="a">
                                                <ListIcon
                                                    name="user"
                                                    style={{
                                                        color: "#007397",
                                                    }}
                                                />
                                                <ListContent>
                                                    <ListHeader>
                                                        {active_mentor.name}
                                                    </ListHeader>
                                                </ListContent>
                                            </ListItem>
                                        </List>
                                    )
                                )}
                            </Segment>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </>
        </Layout>
    );
}
