import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import {
    Container,
    Header,
    Image,
    Grid,
    GridColumn,
    GridRow,
    Card,
    Button,
    Segment,
    ListItem,
    ListHeader,
    ListDescription,
    ListContent,
    Icon,
    List,
} from "@/UI/SUI";

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
        isActive: true,
        url: "",
    },
];

const extra = (
    <Button fluid color="green">
        Записаться
    </Button>
);

const CourseDetailsPage: React.FC = () => {
    return (
        <Layout>
            <Container>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    Python-разработчик
                </Header>
                <Image
                    src="/example-course-photo.jpg"
                    alt="course image"
                    centered
                />
                <Grid style={{ marginTop: "30px" }}>
                    <GridRow>
                        <GridColumn width={10}>
                            <p style={{ fontSize: "large" }}>
                                Курс дает возможность познакомиться с основными
                                понятиями и особенностями языка и системы
                                Python. Рассматриваются основные конструкции
                                языка и встроенные функции, создание модулей и
                                пакетов, инструменты функционального
                                программирования, основные библиотеки Python для
                                работы с данными.
                            </p>
                        </GridColumn>
                        <GridColumn width={6}>
                            <Card
                                header="600 000 тг."
                                meta="Оффлайн / онлайн обучение"
                                description="Курс: 26 недель"
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
                                <List>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                Форма обучения
                                            </ListHeader>
                                            <ListDescription>
                                                – гибрид; оффлайн; онлайн
                                            </ListDescription>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                Язык обучения
                                            </ListHeader>
                                            <ListDescription>
                                                русский
                                            </ListDescription>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                Количество недель
                                            </ListHeader>
                                            <ListDescription>
                                                26
                                            </ListDescription>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                Возраст обучающихся
                                            </ListHeader>
                                            <ListDescription>
                                                – 18-45 лет
                                            </ListDescription>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                Количество занятий и учебных
                                                часов в неделю
                                            </ListHeader>
                                            <ListDescription>
                                                4 часа
                                            </ListDescription>
                                        </ListContent>
                                    </ListItem>
                                    <ListItem as="a">
                                        <Icon name="check square outline" />
                                        <ListContent>
                                            <ListHeader>
                                                Количество учебных часов за год
                                            </ListHeader>
                                            <ListDescription>
                                                104 часа
                                            </ListDescription>
                                        </ListContent>
                                    </ListItem>
                                </List>
                            </Segment>
                        </GridColumn>
                        <GridColumn width={8}>
                            <Header as="h2" style={{ marginBottom: "30px" }}>
                                Цель изучения дисциплины
                            </Header>
                            <Container style={{ fontSize: "x-large" }}>
                                <p>
                                    Изучить основы алгоритмизации вычислительных
                                    процессов и возможности языка
                                    программирования Python при решении
                                    различных прикладных задач. Каждая работа
                                    сопровождается пояснениями и контрольными
                                    вопросами, направленными на повышение
                                    качества усвоения материала
                                </p>
                            </Container>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    В результате изучения курса
                </Header>
                <Grid>
                    <GridRow>
                        <GridColumn width={8}>
                            <Header as="h3" style={{ marginBottom: "30px" }}>
                                Должен знать:
                            </Header>
                            <List as="ul" style={{ fontSize: "large" }}>
                                <ListItem as="li">
                                    тенденции и перспективы развития современных
                                    инструментальных сред разработки программ
                                </ListItem>
                                <ListItem as="li">
                                    иметь представление о теоретических основах
                                    алгоритмизации
                                </ListItem>
                                <ListItem as="li">
                                    уметь осуществлять редактирование и отладку
                                    программ на языке Python
                                </ListItem>
                                <ListItem as="li">
                                    построения структурных схем алгоритмов
                                    различных задач, в том числе использующих
                                    линейные, ветвящиеся и циклические алгоритмы
                                    вычислительных процессов
                                </ListItem>
                            </List>
                        </GridColumn>
                        <GridColumn width={8}>
                            <Header as="h3" style={{ marginBottom: "30px" }}>
                                Должен уметь:
                            </Header>
                            <List as="ul" style={{ fontSize: "large" }}>
                                <ListItem as="li">
                                    выбирать и применять базовые типы данных и
                                    структуры данных языка программирования
                                    Python для решения прикладных задач
                                </ListItem>
                                <ListItem as="li">
                                    разрабатывать собственные функции на языке
                                    программирования Python , передавать
                                    аргументы в функции, возвращать результат из
                                    функции для решения прикладных задач
                                </ListItem>
                                <ListItem as="li">
                                    писать программный код на языке
                                    программирования Python
                                </ListItem>
                                <ListItem as="li">
                                    запускать и отлаживать свой код для решения
                                    прикладных задач.
                                </ListItem>
                            </List>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    Результат обучения
                </Header>
                <Container style={{ fontSize: "large" }}>
                    <p>
                        В результате обучения обучающиеся должны уметь создавать
                        телеграм-ботов, сайты, приложения, нейросети и
                        использовать Python для научных исследований — теория и
                        практика на реальных задачах. При успешной сдаче
                        экзамена, обучающийся получает квалификацию Junior
                        разработчик. Должен демонстрировать способность и
                        готовность применять полученные знания в практической
                        деятельности.
                    </p>
                </Container>
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    Форма контроля
                </Header>
                <Container style={{ fontSize: "large" }}>
                    <p>Экзамен</p>
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
            </Container>
        </Layout>
    );
};

export default CourseDetailsPage;
