import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { ICourseDetailPageInfo } from "@/service/courseDetailPageService/types";
import {
    Button,
    Card,
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
import { useLocale, useTranslations } from "next-intl";


interface ICourseDetailPageProps {
    courseInfo: ICourseDetailPageInfo;
}

export function CourseDetailsPage({
    courseInfo,
}: ICourseDetailPageProps) {
    const t = useTranslations();
    const locale = useLocale();
    const extra = (
        <Button fluid style={{ backgroundColor: "#007397", color: "white" }}>
            {t('CourseDetailPage.signUp')}
        </Button>
    );
    
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: t('Breadcrumb.main'),
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Courses",
            content: t('Breadcrumb.courses'),
            isLink: true,
            isActive: false,
            url: `/${locale}/courses`,
        },
        {
            key: "CoursePage",
            content: courseInfo.title,
            isLink: true,
            isActive: true,
            url: "",
        },
    ];
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    {courseInfo.title}
                </Header>
                <Image
                    rounded
                    src={courseInfo.img}
                    alt="course image"
                    centered
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "600px",
                    }}
                />
                <Grid style={{ marginTop: "30px" }}>
                    <GridRow>
                        <GridColumn width={10} verticalAlign="middle">
                            <p style={{ fontSize: "large" }}>
                                {courseInfo.desc}
                            </p>
                        </GridColumn>
                        <GridColumn
                            width={6}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <Card
                                header={`${courseInfo.price} тг.`}
                                meta={t('CourseDetailPage.format', { format: courseInfo.format })}
                                description={t('CourseDetailPage.duration', { timeline: courseInfo.timeline })}
                                extra={extra}
                                fluid
                                style={{
                                    margin: "auto",
                                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                                    borderRadius: "10px",
                                }}
                            />
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Grid>
                    <GridRow>
                        <GridColumn width={8}>
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
                                {courseInfo.features.map((feature, index) => (
                                    <List key={index}>
                                        <ListItem as="a">
                                            <Icon name="check square outline" />
                                            <ListContent>
                                                <ListHeader>
                                                    {feature.title}
                                                </ListHeader>
                                                <ListDescription>
                                                    {feature.item}
                                                </ListDescription>
                                            </ListContent>
                                        </ListItem>
                                    </List>
                                ))}
                            </Segment>
                        </GridColumn>
                        <GridColumn width={8}>
                            <Segment
                                raised
                                style={{
                                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                                    height: "100%",
                                    padding: "30px",
                                    borderRadius: "10px",
                                }}
                            >
                                <Header
                                    textAlign="center"
                                    as={"h2"}
                                    style={{ marginBottom: "30px" }}
                                >
                                    {t('CourseDetailPage.goal')}
                                </Header>
                                <Container
                                    style={{
                                        fontSize: "large",
                                        paddingLeft: "10px",
                                    }}
                                >
                                    <p>{courseInfo.goal}</p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Container
                    style={{
                        boxShadow: "1px 1px 20px 10px #e0e0e0",
                        borderRadius: "10px",
                        padding: "30px",
                        margin: "30px ",
                        width: "auto",
                    }}
                >
                    <Header as="h2" style={{ marginBottom: "30px" }}>
                        {t('CourseDetailPage.tasks')}
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
                </Container>

                <Container
                    style={{
                        boxShadow: "1px 1px 20px 10px #e0e0e0",
                        borderRadius: "10px",
                        padding: "30px",
                        margin: "auto",
                        width: "auto",
                    }}
                >
                    <Header as="h2" style={{ marginBottom: "30px" }}>
                        {t('CourseDetailPage.results')}
                    </Header>
                    <Grid>
                        <GridRow>
                            <GridColumn width={8}>
                                <Header
                                    as="h3"
                                    style={{ marginBottom: "30px" }}
                                >
                                    {t('CourseDetailPage.mustKnow')}
                                </Header>
                                {courseInfo.knowhows.map((knowhow, index) => (
                                    <List
                                        key={index}
                                        as="ul"
                                        style={{ fontSize: "large" }}
                                    >
                                        <ListItem as="li">
                                            {knowhow.text}
                                        </ListItem>
                                    </List>
                                ))}
                            </GridColumn>
                            <GridColumn width={8}>
                                <Header
                                    as="h3"
                                    style={{ marginBottom: "30px" }}
                                >
                                    {t('CourseDetailPage.mustBeAble')}
                                </Header>
                                {courseInfo.skills.map((skill, index) => (
                                    <List
                                        key={index}
                                        as="ul"
                                        style={{ fontSize: "large" }}
                                    >
                                        <ListItem as="li">
                                            {skill.text}
                                        </ListItem>
                                    </List>
                                ))}
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
                <Container
                    style={{
                        boxShadow: "1px 1px 20px 10px #e0e0e0",
                        borderRadius: "10px",
                        padding: "30px",
                        margin: "30px auto",
                        width: "auto",
                    }}
                >
                    <Header as="h2" style={{ marginBottom: "30px" }}>
                        {t('CourseDetailPage.learnResults')}
                    </Header>

                    <p style={{ fontSize: "large" }}>{courseInfo.result}</p>
                </Container>
                <Container
                    style={{
                        boxShadow: "1px 1px 20px 10px #e0e0e0",
                        borderRadius: "10px",
                        padding: "30px",
                        margin: "30px auto",
                        width: "auto",
                    }}
                >
                    <Header as="h2" style={{ marginBottom: "30px" }}>
                        {t('CourseDetailPage.formOfControl')}
                    </Header>

                    <p style={{ fontSize: "large" }}>{courseInfo.control}</p>
                </Container>
                <Grid>
                    <GridRow>
                        <GridColumn width={8}>
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
                                    {t('CourseDetailPage.Block1.title')}
                                </Header>
                                <List
                                    style={{
                                        fontSize: "large",
                                    }}
                                >
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                {t('CourseDetailPage.Block1.p1')}
                                            </ListHeader>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                {t('CourseDetailPage.Block1.p2')}
                                            </ListHeader>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                {t('CourseDetailPage.Block1.p3')}
                                            </ListHeader>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>{t('CourseDetailPage.Block1.p4')}</ListHeader>
                                        </ListContent>
                                    </ListItem>
                                </List>
                            </Segment>
                        </GridColumn>
                        <GridColumn width={8}>
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
                                <Header textAlign="center" as={"h2"}>
                                    {t('CourseDetailPage.Block2.title')}
                                </Header>
                                <Header
                                    textAlign="center"
                                    as={"h3"}
                                    style={{ marginBottom: "30px" }}
                                >
                                    {t('CourseDetailPage.Block2.p1')}
                                </Header>
                                <Container
                                    style={{
                                        paddingLeft: "10px",
                                    }}
                                >
                                    <p>
                                        {t('CourseDetailPage.Block2.p2')}
                                    </p>
                                    <List as="ol" style={{}}>
                                        <ListItem as="li">
                                            {t('CourseDetailPage.Block2.p3')}
                                        </ListItem>
                                        <ListItem as="li">
                                            {t('CourseDetailPage.Block2.p4')}
                                        </ListItem>
                                    </List>
                                    <p>
                                        {t('CourseDetailPage.Block2.p5')}{" "}
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            {t('CourseDetailPage.Block2.p5-1')}
                                        </span>
                                    </p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Container
                    style={{
                        boxShadow: "1px 1px 20px 10px #e0e0e0",
                        borderRadius: "10px",
                        padding: "30px",
                        margin: "30px auto",
                        width: "auto",
                    }}
                >
                    <Header as="h3" style={{ marginBottom: "30px" }}>
                        {t('CourseDetailPage.Block3.title1')}
                    </Header>

                    <p>
                        {t('CourseDetailPage.Block3.p1')}
                    </p>

                    <Header as="h3" style={{ marginBottom: "30px" }}>
                        {t('CourseDetailPage.Block3.title2')}
                    </Header>

                    <p>
                        {t('CourseDetailPage.Block3.p2')}
                    </p>
                </Container>
                <Container
                    style={{
                        boxShadow: "1px 1px 20px 10px #e0e0e0",
                        borderRadius: "10px",
                        padding: "30px",
                        margin: "30px auto",
                        width: "auto",
                    }}
                >
                    <Header as="h2" style={{ marginBottom: "30px" }}>
                        {t('CourseDetailPage.Block4.title')}
                    </Header>

                    <Grid columns={3} stackable>
                        <GridRow centered>
                            <GridColumn verticalAlign="middle">
                                <Header as="h3" textAlign="center">
                                    <Icon
                                        name="lightbulb outline"
                                        style={{ color: "#007397" }}
                                    />
                                    {t('CourseDetailPage.Block4.subTitle1')}
                                </Header>
                                <p>
                                    {t('CourseDetailPage.Block4.p1')}
                                </p>
                            </GridColumn>
                            <GridColumn verticalAlign="middle">
                                <Header as="h3" textAlign="center">
                                    <Icon
                                        name="rocket"
                                        style={{ color: "#007397" }}
                                    />
                                    {t('CourseDetailPage.Block4.subTitle2')}
                                </Header>
                                <p>
                                    {t('CourseDetailPage.Block4.p2')}
                                </p>
                            </GridColumn>
                            <GridColumn verticalAlign="middle">
                                <Header as="h3" textAlign="center">
                                    <Icon
                                        name="code"
                                        style={{ color: "#007397" }}
                                    />
                                    {t('CourseDetailPage.Block4.subTitle3')}
                                </Header>
                                <p>
                                    {t('CourseDetailPage.Block4.p3')}
                                </p>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </>
        </Layout>
    );
}
