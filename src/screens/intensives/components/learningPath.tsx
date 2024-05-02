import { Container, Grid, GridColumn, GridRow, Header } from "@/UI/SUI";

const LearningPath = () => {
    return (
        <>
            <Header as="h2" style={{ marginBottom: "30px" }}>
                КАК ПРОХОДИТ ОБУЧЕНИЕ
            </Header>
            <Grid
                columns={3}
                centered
                stackable
                style={{ marginLeft: "0", marginRight: "0" }}
            >
                <GridRow
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        gap: "21px",
                    }}
                >
                    <GridColumn
                        textAlign="center"
                        width={5}
                        style={{
                            boxShadow: "1px 1px 20px 10px #e0e0e0",
                            borderRadius: "10px",
                            padding: "20px",
                            margin: "10px",
                            marginLeft: "0",
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
                            boxShadow: "1px 1px 20px 10px #e0e0e0",
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
                            boxShadow: "1px 1px 20px 10px #e0e0e0",
                            borderRadius: "10px",
                            padding: "20px",
                            margin: "10px",
                            marginRight: "0",
                        }}
                    >
                        <p>
                            <strong>03</strong> <br />
                            Приобретаете знания и нарабатываете портфолио
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default LearningPath;
