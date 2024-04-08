import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { ICoachDetailPageInfo } from "@/service/coachDetailPageService/types";
import {
    Button,
    Card,
    CardGroup,
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Icon,
    Image,
    List,
    ListContent,
    ListDescription,
    ListHeader,
    ListItem,
    Segment,
} from "@/UI/SUI";

interface ICoachDetailPageProps {
    coachInfo: ICoachDetailPageInfo;
}

export async function CoachDetailsPage({
    coachInfo,
}: ICoachDetailPageProps) {
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: "Главная",
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Coaches",
            content: "Тренеры",
            isLink: true,
            isActive: false,
            url: "/coaches",
        },
        {
            key: "CoachPage",
            content: coachInfo.name,
            isLink: true,
            isActive: true,
            url: "",
        },
    ];
    return (
        <Layout>
            <Container>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Segment>
                    <Image
                        rounded
                        src={coachInfo.img}
                        alt={coachInfo.name}
                        floated="left"
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "600px",
                        }}
                    />
                    <Segment
                                raised
                                style={{
                                    fontSize: "large",
                                    boxShadow: "0px 0px 5px 2px #007397",
                                    height: "100%",
                                    padding: "30px",
                                }}
                            >
                                <Header as="h1" style={{ marginBottom: "30px" }}>
                        {coachInfo.name}
                    </Header>
                                
                                    <List>
                                        <ListItem as="a">
                                            <Icon name="info circle" />
                                            <ListContent>
                                                <ListHeader>
                                                    Должность:
                                                </ListHeader>
                                                <ListDescription>
                                                    {coachInfo.role}
                                                </ListDescription>
                                            </ListContent>
                                        </ListItem>
                                        <ListItem as="a">
                                            <Icon name="info circle" />
                                            <ListContent>
                                                <ListHeader>
                                                    Стаж:
                                                </ListHeader>
                                                <ListDescription>
                                                    {coachInfo.exp}
                                                </ListDescription>
                                            </ListContent>
                                        </ListItem>
                                    </List>
                            </Segment>
                </Segment>
                <Header as="h2" style={{ marginBottom: "15px" }}>
                        Образование
                    </Header>
                    <p>
                        {coachInfo.education}
                    </p>
                <Grid style={{ marginTop: "30px" }}>
                    <GridRow>
                        <GridColumn verticalAlign="middle">
                            <p style={{ fontSize: "large" }}>
                                {coachInfo.desc}
                            </p>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Grid>
                    <GridRow>
                        <GridColumn width={8}>
                            {/*<Segment
                                raised
                                style={{
                                    fontSize: "large",
                                    boxShadow: "0px 0px 5px 2px #007397",
                                    height: "100%",
                                    padding: "30px",
                                }}
                            >
                                {coachInfo.courses.map((course) => (
                                    <List key={course.id}>
                                        <ListItem as="a">
                                            <Icon name="check square outline" />
                                            <ListContent>
                                                <ListHeader>
                                                    {course.title}
                                                </ListHeader>
                                            </ListContent>
                                        </ListItem>
                                    </List>
                                ))}
                            </Segment>*/}
                        </GridColumn>
                    </GridRow>
                </Grid>
               {/* <Container
                    style={{
                        boxShadow: "0px 0px 5px 2px #007397",
                        borderRadius: "10px",
                        padding: "30px",
                        margin: "30px ",
                    }}
                >
                    <Header as="h2" style={{ marginBottom: "30px" }}>
                        Задачи курса
                    </Header>

                    {courseInfo.challenges.map((challenge, index) => (
                        <List
                            key={index}
                            as="ul"
                            style={{ fontSize: "large", textAlign: "justify" }}
                        >
                            <ListItem as="li">{challenge.text}</ListItem>
                        </List>
                    ))}
                    </Container>*/}

                
                
            </Container>
        </Layout>
    );
}
