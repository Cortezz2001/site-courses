import { Container, Grid, GridColumn, GridRow, Image } from "@/UI/SUI";

const ImageBlock = () => {
    return (
        <Container>
            <Grid divided style={{ paddingBottom: "30px" }}>
                <GridRow centered>
                    <GridColumn centered>
                        <Image
                            rounded
                            alt=""
                            src="/notebook-with-code.jpeg"
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "600px",
                            }}
                        />
                        <Container
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "20%",
                                transform: "translate(-50%, -50%)",
                                color: "white",
                                padding: "25px",
                                width: "30%",
                            }}
                        >
                            <h2>НАЧНИТЕ КАРЬЕРУ ПРОГРАММИСТА</h2>
                            <p>С 5 по 10 августа 2024</p>
                            <p>
                                Это 6 дней офлайн и онлайн практики, насыщенная
                                программа, концентрация на одной теме и готовый
                                проект в конце
                            </p>
                            <p>
                                А еще — возможность попробовать понравившийся
                                курс и записаться на обучение, а также получить
                                скидку на покупку любого курса длительностью 5,5
                                месяцев (мы дарим скидку после прохождения
                                интенсива в размере стоимости интенсива)
                            </p>
                            <p>Количество мест ограничено!</p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default ImageBlock;
