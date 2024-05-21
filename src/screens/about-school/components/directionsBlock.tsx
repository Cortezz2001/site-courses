import { Header, Grid, GridRow, GridColumn, Icon } from "@/UI/SUI";

const DirectionsBlock: React.FC = () => {
    return (
        <>
            <Grid
                columns={3}
                stackable
                style={{
                    marginTop: "50px",
                    marginBottom: "50px ",
                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                    padding: "30px",
                    borderRadius: "10px",
                    marginLeft: "0",
                    marginRight: "0",
                }}
            >
                <GridRow>
                    <Header
                        as="h2"
                        icon
                        textAlign="center"
                        style={{ marginBottom: "30px" }}
                    >
                        <Icon
                            name="graduation cap"
                            style={{ color: "#007397" }}
                        />
                        Направления курсов
                    </Header>
                </GridRow>
                <GridRow centered>
                    <GridColumn textAlign="center">
                        <Header as="h3">
                            <Icon name="laptop" style={{ color: "#007397" }} />
                            Основы программирования
                        </Header>
                        <p>
                            Создание веб-сайтов с использованием HTML, CSS и
                            JavaScript.
                        </p>
                        <p>Работа с фреймворками</p>
                    </GridColumn>
                    <GridColumn textAlign="center">
                        <Header as="h3">
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
                    <GridColumn textAlign="center">
                        <Header as="h3">
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
                    <GridColumn textAlign="center">
                        <Header as="h3">
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
                    <GridColumn textAlign="center">
                        <Header as="h3">
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
        </>
    );
};

export default DirectionsBlock;
