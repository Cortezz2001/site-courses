"use client";

import {
    Button,
    Image,
    Grid,
    GridRow,
    Header,
    Icon,
    Popup,
    GridColumn,
    Container,
} from "@/UI/SUI";

const CartButton = () => {
    const selectedCourses = [
        { id: 1, name: "Web – разработчик", price: 100000 },
        {
            id: 2,
            name: "Разработка мобильных приложений (iOS, Android)",
            price: 200000,
        },
        { id: 3, name: "Разработка игр (GameDev)", price: 300000 },
        { id: 4, name: "Разработка игр (GameDev)", price: 300000 },
        { id: 5, name: "Разработка игр (GameDev)", price: 300000 },
        { id: 6, name: "Разработка игр (GameDev)", price: 300000 },
        { id: 7, name: "Разработка игр (GameDev)", price: 300000 },
        { id: 8, name: "Разработка игр (GameDev)", price: 300000 },
    ];

    const totalPrice = selectedCourses.reduce(
        (acc, course) => acc + course.price,
        0
    );

    const CartContent = (
        <Container
            style={{
                padding: "15px",
                paddingBottom: "15px",
                width: "400px",
                margin: "0 auto",
            }}
        >
            <Header as="h3" style={{ marginBottom: "25px" }}>
                Выбранные курсы:
            </Header>
            <Grid
                columns={4}
                divided="vertically"
                verticalAlign="middle"
                textAlign="center"
                style={{
                    overflowY: "auto",
                    maxHeight: "400px",
                    scrollbarColor: "#007397 transparent",
                }}
            >
                {selectedCourses.map((course) => (
                    <GridRow key={course.id}>
                        <GridColumn width={3} textAlign="left">
                            <Image
                                src="/programmers-stock.png"
                                alt=""
                                size="mini"
                            />
                        </GridColumn>
                        <GridColumn textAlign="left" width={5}>
                            {course.name}
                        </GridColumn>
                        <GridColumn textAlign="center" width={4}>
                            {course.price} тг
                        </GridColumn>
                        <GridColumn textAlign="right">
                            <Button icon color="red">
                                <Icon name="trash" />
                            </Button>
                        </GridColumn>
                    </GridRow>
                ))}
            </Grid>
            <Container
                style={{
                    marginTop: "20px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "10px",
                    justifyContent: "center",
                }}
            >
                <Header
                    as="h4"
                    textAlign="left"
                    style={{ margin: "10px", marginLeft: "0" }}
                >
                    Сумма к оплате:
                </Header>
                <Header
                    as="h4"
                    textAlign="right"
                    style={{ margin: "15px", marginRight: "0" }}
                >
                    {totalPrice} тг
                </Header>
            </Container>
            <Button
                color="blue"
                fluid
                content="Перейти к оплате"
                style={{ backgroundColor: "#007397", color: "white" }}
            />
        </Container>
    );

    return (
        <Popup
            trigger={
                <Button
                    color="black"
                    circular
                    icon
                    labelPosition="left"
                    style={{
                        marginLeft: "20px",
                        backgroundColor: "#007397",
                        color: "white",
                    }}
                >
                    <Icon
                        name="cart"
                        style={{
                            backgroundColor: "#007397",
                            padding: "10px",
                        }}
                    />
                    Корзина
                </Button>
            }
            content={CartContent}
            on="click"
            position="bottom right"
        />
    );
};

export default CartButton;
