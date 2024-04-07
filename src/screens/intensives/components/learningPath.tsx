import { Container, Grid, GridColumn, GridRow, Header } from "@/UI/SUI";

const LearningPath = () => {
    return (
        <Container>
            <Header as="h2" style={{ marginBottom: "30px" }}>
                КАК ПРОХОДИТ ОБУЧЕНИЕ
            </Header>
            <Grid columns={3} centered stackable>
                <GridRow>
                    <GridColumn
                        textAlign="center"
                        width={5}
                        style={{
                            border: "2px solid #007397",
                            borderRadius: "10px",
                            padding: "20px",
                            margin: "10px",
                        }}
                    >
                        <p>
                            <strong>01</strong> <br />
                            Слушаете лекцию и выполняете задание
                        </p>
                    </GridColumn>
                    <GridColumn
                        textAlign="center"
                        width={5}
                        style={{
                            border: "2px solid #007397",
                            borderRadius: "10px",
                            padding: "20px",
                            margin: "10px",
                        }}
                    >
                        <p>
                            <strong>02</strong> <br />
                            Получаете советы от куратора и вносите правки
                        </p>
                    </GridColumn>
                    <GridColumn
                        textAlign="center"
                        width={5}
                        style={{
                            border: "2px solid #007397",
                            borderRadius: "10px",
                            padding: "20px",
                            margin: "10px",
                        }}
                    >
                        <p>
                            <strong>03</strong> <br />
                            Приобретаете знания и нарабатываете портфолио
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default LearningPath;
