import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import style from "../style.module.css";

const InfoBlock: React.FC = () => {
    return (
        <>
            <Header as="h2" className={style.info_block_top_heading}>
                Практика на реальных примерах и задачах
            </Header>
            <Grid columns={2} divided>
                <GridRow className={style.info_block_top_container}>
                    <GridColumn className={style.info_block_top_left}>
                        <Image
                            rounded
                            alt=""
                            src="/programmer-stock.jpg"
                            className={style.info_block_top_image}
                        />
                    </GridColumn>
                    <GridColumn
                        verticalAlign="middle"
                        className={style.info_block_top_right}
                    >
                        <Container
                            textAlign="justified"
                            style={{ fontSize: "large" }}
                        >
                            <p>
                                В LION IT-SCHOOL любой может начать с нуля и
                                освоить программирование, получить новую
                                профессию в сфере IT, найти новое увлечение,
                                завести новых друзей и, самое главное, воплотить
                                свою мечту и профессиональным стать
                                разработчиком.
                            </p>
                            <p>
                                Мы ценим творческий подход и свободу мысли. Наши
                                наставники готовы поддержать самые амбициозные
                                идеи и помочь в их реализации.
                            </p>
                            <p>
                                Занятия проходят в удобное для вас время —
                                обычно в выходные и вечером, чтобы совместить их
                                с работой или учебой.
                            </p>
                            <p>
                                Мы предлагаем различные форматы (онлайн и
                                офлайн), чтобы сделать процесс обучения
                                максимально гибким и удобным. Присоединяйтесь к
                                нам в LION IT-SCHOOL, мы ждем вас!
                            </p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>

            <Header as="h2" className={style.info_block_bottom_heading}>
                LIon IT-school: источник знаний для создания технологического
                будущего
            </Header>
            <Grid columns={2} divided>
                <GridRow className={style.info_block_bottom_container}>
                    <GridColumn
                        verticalAlign="middle"
                        className={style.info_block_bottom_left}
                    >
                        <Container
                            textAlign="justified"
                            style={{ fontSize: "large" }}
                        >
                            <p>
                                Lion IT - school предлагает широкий спектр
                                курсов по информационным технологиям,
                                охватывающих такие области как программирование,
                                веб-разработка, мобильная разработка, базы
                                данных, анализ данных, кибербезопасность,
                                искусственный интеллект, облачные технологии и
                                интернет вещей. Студенты могут ожидать
                                практического обучения, персонализированного
                                подхода к обучению и возможности сетевых встреч
                                с профессионалами отрасли.
                            </p>
                            <p>
                                Помимо курсов, в IT школе проводятся
                                разнообразные мероприятия, такие как
                                мастер-классы, хакатоны, карьерные дни, онлайн
                                конференции, публичные лекции, участие в
                                выставках и конференциях, образовательные
                                турниры, партнерство с IT компаниями и
                                спортивные и творческие IT события. Это
                                динамичное образовательное пространство
                                способствует развитию студентов, их
                                профессиональному росту и вдохновляет на новые
                                творческие достижения в области
                                информационных технологий.
                            </p>
                        </Container>
                    </GridColumn>
                    <GridColumn className={style.info_block_bottom_right}>
                        <Image rounded alt="" src="/programmers-stock-3.png" />
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default InfoBlock;
