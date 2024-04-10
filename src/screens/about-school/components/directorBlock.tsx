import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";

const DirectorBlock: React.FC = () => {
    return (
        <>
            <Grid columns={2} divided style={{ marginTop: "30px" }}>
                <GridRow>
                    <GridColumn verticalAlign="middle" width={11}>
                        <Container
                            style={{
                                paddingRight: "30px",
                            }}
                        >
                            <Header as="h2">Директор «Lion IT-SCHOOL»</Header>
                            <p>Бакалавр по специальности «Информатика»; </p>
                            <p>
                                {" "}
                                Магистр технических наук по специальности
                                «Вычислительная техника и программное
                                обеспечение»;{" "}
                            </p>
                            <p>
                                <strong>Сферы деятельности:</strong> стаж
                                научно-педагогической деятельности 14 лет, автор
                                курсов по ИКТ, сетевым технологиям, менеджер
                                международных проектов Erasmus + в области ИТ,
                                образования, робототехнических систем.
                            </p>
                        </Container>
                    </GridColumn>
                    <GridColumn
                        width={5}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Image rounded alt="" src="/director.png" />
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default DirectorBlock;
