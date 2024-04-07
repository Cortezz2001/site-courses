import {
    Container,
    Header,
    Grid,
    Image,
    GridRow,
    GridColumn,
    Icon,
    Divider,
} from "@/UI/SUI";

const DirectionsBlock: React.FC = () => {
    return (
        <Container style={{ marginTop: "50px", marginBottom: "50px " }}>
            <Header
                as="h2"
                icon
                textAlign="center"
                style={{ marginBottom: "50px" }}
            >
                <Icon name="graduation cap" style={{ color: "#007397" }} />
                Направления курсов
            </Header>
            <Grid columns={3} stackable>
                <GridRow centered>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon name="laptop" style={{ color: "#007397" }} />
                            Основы программирования
                        </Header>
                        <p>
                            Создание веб-сайтов с использованием HTML, CSS и
                            JavaScript.
                        </p>
                        <p>Работа с фреймворками</p>
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon
                                name="code branch"
                                style={{ color: "#007397" }}
                            />
                            Веб-разработка
                        </Header>
                        <p>
                            Изучение основных понятий и принципов
                            программирования.
                        </p>
                        <p>
                            Настройка окружения разработки и освоение базовых
                            языков программирования.
                        </p>
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon
                                name="mobile alternate"
                                style={{ color: "#007397" }}
                            />
                            Мобильная разработка
                        </Header>
                        <p>
                            Программирование мобильных приложений для iOS и
                            Android.
                        </p>
                        <p>
                            Использование инструментов, таких как Swift, Kotlin
                            и др.
                        </p>
                    </GridColumn>
                </GridRow>
                <GridRow centered style={{ marginTop: "10px" }}>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon
                                name="database"
                                style={{ color: "#007397" }}
                            />
                            Базы данных и анализ данных
                        </Header>
                        <p>Освоение работы с базами данных, SQL.</p>
                        <p>
                            Обучение анализу данных с использованием Python и
                            инструментов Data Science.
                        </p>
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon name="wifi" style={{ color: "#007397" }} />
                            Сетевые технологии
                        </Header>
                        <p>Инженер умных устройств.</p>
                        <p>Обучение алгоритмам и структурам данных.</p>
                        <p>
                            Разработка игр, искусственного интеллекта или
                            блокчейн-приложений.
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default DirectionsBlock;
