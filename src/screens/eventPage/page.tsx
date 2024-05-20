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

import style from "./style.module.css";

interface IEventDetailPageProps {
    eventInfo: IEventDetailPageInfo;
}

export async function EventDetailsPage({ eventInfo }: IEventDetailPageProps) {
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
            isActive: false,
            url: "/events",
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
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "600px",
                        margin: "30px auto",
                    }}
                />
                <Grid>
                    <GridRow>
                        <GridColumn width={12}>
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
                                    Описание
                                </Header>
                                <p> {eventInfo.desc}</p>
                            </Segment>
                        </GridColumn>
                        <GridColumn width={4}>
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
                                    className={style.event_date_title}
                                >
                                    Дата
                                </Header>
                                <p className={style.event_schedule}>
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
                                    Ответственные тренеры:
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
