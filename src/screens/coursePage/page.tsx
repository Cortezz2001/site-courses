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

const extra = (
    <Button fluid style={{ backgroundColor: "#007397", color: "white" }}>
        Записаться
    </Button>
);

interface ICourseDetailPageProps {
    courseInfo: ICourseDetailPageInfo;
}

export async function CourseDetailsPage({
    courseInfo,
}: ICourseDetailPageProps) {
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: "Главная",
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Courses",
            content: "Курсы",
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
                        <GridColumn width={6}>
                            <Card
                                header={`${courseInfo.price} тг.`}
                                meta={`Курс: ${courseInfo.format} обучение`}
                                description={`Курс: ${courseInfo.timeline} недель`}
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
                                    Цель изучения дисциплины
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
                        В результате изучения курса
                    </Header>
                    <Grid>
                        <GridRow>
                            <GridColumn width={8}>
                                <Header
                                    as="h3"
                                    style={{ marginBottom: "30px" }}
                                >
                                    Должен знать:
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
                                    Должен уметь:
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
                        Результат обучения
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
                        Форма контроля
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
                                    Критерии отбора студентов
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
                                                Мотивационное письмо
                                            </ListHeader>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                Тестирование на знание основ IT
                                            </ListHeader>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                Тестирование на знание
                                                английского языка
                                            </ListHeader>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>Интервью</ListHeader>
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
                                    Особые условия
                                </Header>
                                <Header
                                    textAlign="center"
                                    as={"h3"}
                                    style={{ marginBottom: "30px" }}
                                >
                                    Гарантийный взнос в размере 60000 тг.
                                </Header>
                                <Container
                                    style={{
                                        paddingLeft: "10px",
                                    }}
                                >
                                    <p>
                                        Для возврата обязательного Гарантийного
                                        взноса, поступившему студенту необходимо
                                        выполнение следующих совокупных условий:
                                    </p>
                                    <List as="ol" style={{}}>
                                        <ListItem as="li">
                                            Подписание Договора оказания услуг
                                            по обучению в «Lion IT-school»
                                        </ListItem>
                                        <ListItem as="li">
                                            Успешное окончание выбранного курса
                                        </ListItem>
                                    </List>
                                    <p>
                                        В случае невыполнения вышеуказанных
                                        условий, гарантийный{" "}
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            взнос не возвращается
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
                        Образовательные технологии, применяемые при освоении
                        дисциплины
                    </Header>

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

                    <Header as="h3" style={{ marginBottom: "30px" }}>
                        Адаптивные образовательные технологии (инклюзивное
                        обучение)
                    </Header>

                    <p>
                        Для успешного освоения дисциплины при обучении лиц с
                        ограниченными возможностями здоровья могут применяться
                        следующие адаптивные Образовательные технологии: -
                        студентоцентрированное обучение, основанное на
                        рефлексивном подходе к обучению со стороны преподавателя
                        и обучающихся.
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
                        Кому подойдет этот курс
                    </Header>

                    <Grid columns={3} stackable>
                        <GridRow centered>
                            <GridColumn textAlign="center">
                                <Header as="h3">
                                    <Icon
                                        name="lightbulb outline"
                                        style={{ color: "#007397" }}
                                    />
                                    Новичкам в программировании
                                </Header>
                                <p>
                                    Для новичков в программировании, курс может
                                    стать отличным стартовым пунктом. Он
                                    предоставляет базовые знания и основные
                                    концепции, которые необходимы для начала
                                    изучения программирования. Это помогает
                                    новичкам понять основные принципы
                                    кодирования, структуры данных и алгоритмов,
                                    что делает их более уверенными в своих
                                    способностях и помогает им избежать
                                    распространенных ошибок на ранних этапах
                                    своего обучения.
                                </p>
                            </GridColumn>
                            <GridColumn textAlign="center">
                                <Header as="h3">
                                    <Icon
                                        name="rocket"
                                        style={{ color: "#007397" }}
                                    />
                                    Начинающим разработчикам
                                </Header>
                                <p>
                                    Начинающим разработчикам курс
                                    программирования может предложить
                                    дополнительные навыки и технологии, которые
                                    могут быть важными для их карьерного роста.
                                    Например, он может включать в себя обучение
                                    работы с популярными фреймворками или
                                    инструментами, которые широко используются в
                                    отрасли. Это помогает начинающим
                                    разработчикам расширить свой набор навыков и
                                    быть более конкурентоспособными на рынке
                                    труда.
                                </p>
                            </GridColumn>
                            <GridColumn textAlign="center">
                                <Header as="h3">
                                    <Icon
                                        name="code"
                                        style={{ color: "#007397" }}
                                    />
                                    Опытным программистам
                                </Header>
                                <p>
                                    Для опытных программистов курсы
                                    программирования могут предложить
                                    возможность изучения новых технологий или
                                    обновления их существующих навыков. Быстро
                                    развивающаяся природа сферы информационных
                                    технологий требует от программистов
                                    постоянного обновления знаний и умений.
                                    Участие в курсе позволяет опытным
                                    программистам оставаться в курсе последних
                                    тенденций и инноваций в своей области, что
                                    помогает им оставаться востребованными на
                                    рынке труда и развиваться профессионально.
                                </p>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </>
        </Layout>
    );
}
