import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { ICourseDetailPageInfo } from "@/service/courseDetailPageService/types";
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

const extra = (
    <Button fluid style={{ backgroundColor: "#007397", color: "white" }}>
        Записаться
    </Button>
);

const cardItems = [
    {
        header: "Новичкам в программировании",
        description:
            "Для новичков в программировании, курс может стать отличным стартовым пунктом. Он предоставляет базовые знания и основные концепции, которые необходимы для начала изучения программирования. Это помогает новичкам понять основные принципы кодирования, структуры данных и алгоритмов, что делает их более уверенными в своих способностях и помогает им избежать распространенных ошибок на ранних этапах своего обучения.",
    },
    {
        header: "Начинающим разработчикам",
        description:
            "Начинающим разработчикам курс программирования может предложить дополнительные навыки и технологии, которые могут быть важными для их карьерного роста. Например, он может включать в себя обучение работы с популярными фреймворками или инструментами, которые широко используются в отрасли. Это помогает начинающим разработчикам расширить свой набор навыков и быть более конкурентоспособными на рынке труда.",
    },
    {
        header: "Опытным программистам",
        description:
            "Для опытных программистов курсы программирования могут предложить возможность изучения новых технологий или обновления их существующих навыков. Быстро развивающаяся природа сферы информационных технологий требует от программистов постоянного обновления знаний и умений. Участие в курсе позволяет опытным программистам оставаться в курсе последних тенденций и инноваций в своей области, что помогает им оставаться востребованными на рынке труда и развиваться профессионально.",
    },
];

interface ICourseDetailPageProps {
    courseInfo: ICourseDetailPageInfo;
}

export async function CourseDetailsPage({
    courseInfo,
}: ICourseDetailPageProps) {
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Courses",
            content: "Курсы",
            isLink: true,
            isActive: false,
            url: "/courses",
        },
        {
            key: "Course",
            content: "Курс",
            isLink: true,
            isActive: false,
            url: "/courses",
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
            <Container>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    {courseInfo.title}
                </Header>
                <Image src={courseInfo.img} alt="course image" centered />
                <Grid style={{ marginTop: "30px" }}>
                    <GridRow>
                        <GridColumn width={10}>
                            <p style={{ fontSize: "large" }}>
                                {courseInfo.desc}
                            </p>
                        </GridColumn>
                        <GridColumn width={6}>
                            <Card
                                header={`${courseInfo.price} тг.`}
                                meta={`Курс: ${courseInfo.format} обучение`}
                                description={`Курс: ${courseInfo.timeline} недель`}
                                extra={extra}
                                style={{ marginLeft: "auto" }}
                            />
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Grid style={{ marginTop: "30px" }}>
                    <GridRow>
                        <GridColumn width={8}>
                            <Segment raised style={{ fontSize: "large" }}>
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
                            <Header as="h2" style={{ marginBottom: "30px" }}>
                                Цель изучения дисциплины
                            </Header>
                            <Container style={{ fontSize: "x-large" }}>
                                <p>{courseInfo.goal}</p>
                            </Container>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    Задачи курса
                </Header>

                {courseInfo.challenges.map((challenge, index) => (
                    <List key={index} as="ul" style={{ fontSize: "large" }}>
                        <ListItem as="li">{challenge.text}</ListItem>
                    </List>
                ))}
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    В результате изучения курса
                </Header>
                <Grid>
                    <GridRow>
                        <GridColumn width={8}>
                            <Header as="h3" style={{ marginBottom: "30px" }}>
                                Должен знать:
                            </Header>
                            {courseInfo.knowhows.map((knowhow, index) => (
                                <List
                                    key={index}
                                    as="ul"
                                    style={{ fontSize: "large" }}
                                >
                                    <ListItem as="li">{knowhow.text}</ListItem>
                                </List>
                            ))}
                        </GridColumn>
                        <GridColumn width={8}>
                            <Header as="h3" style={{ marginBottom: "30px" }}>
                                Должен уметь:
                            </Header>
                            {courseInfo.skills.map((skill, index) => (
                                <List
                                    key={index}
                                    as="ul"
                                    style={{ fontSize: "large" }}
                                >
                                    <ListItem as="li">{skill.text}</ListItem>
                                </List>
                            ))}
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    Результат обучения
                </Header>
                <Container style={{ fontSize: "large" }}>
                    <p>{courseInfo.result}</p>
                </Container>
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    Форма контроля
                </Header>
                <Container style={{ fontSize: "large" }}>
                    <p>{courseInfo.control}</p>
                </Container>
                <Header as="h3" style={{ marginBottom: "30px" }}>
                    Образовательные технологии, применяемые при освоении
                    дисциплины
                </Header>
                <Container>
                    <p>
                        При проведении учебных занятий предусматривается
                        использование следующих образовательных технологий: -
                        интерактивная лекция (проблемная лекция, дискуссионная
                        лекция, лекция- конференция, лекция-консультация, лекция
                        «Пресс-конференция», лекция
                        «Вопросы-ответы-обсуждение»); - метод проектов
                        (наработка и преобразование собственного опыта и
                        компетентности)
                    </p>
                </Container>
                <Header as="h3" style={{ marginBottom: "30px" }}>
                    Адаптивные образовательные технологии (инклюзивное обучение)
                </Header>
                <Container>
                    <p>
                        Для успешного освоения дисциплины при обучении лиц с
                        ограниченными возможностями здоровья могут применяться
                        следующие адаптивные Образовательные технологии: -
                        студентоцентрированное обучение, основанное на
                        рефлексивном подходе к обучению со стороны преподавателя
                        и обучающихся
                    </p>
                </Container>
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    Кому подойдет этот курс
                </Header>
                <CardGroup items={cardItems} />
            </Container>
        </Layout>
    );
}
