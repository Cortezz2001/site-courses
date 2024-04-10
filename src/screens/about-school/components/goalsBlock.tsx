import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";

const GoalsBlock: React.FC = () => {
    return (
        <>
            <Grid columns={2} divided style={{ marginTop: "30px" }}>
                <GridRow>
                    <GridColumn verticalAlign="middle">
                        <Header as="h2">
                            Цель проекта школы «Lion IT-SCHOOL»
                        </Header>
                        <ul
                            style={{
                                paddingLeft: "20px",
                            }}
                        >
                            <li>
                                Создать курсы в рамках проекта школа
                                IT-технологии
                            </li>
                            <li>Оказание услуг по обучению ИТ-специалистов</li>
                            <li>Укрепление кадрового потенциала</li>
                            <li>
                                Оказание услуг по консультированию в области
                                цифровизации для взрослых и детей
                            </li>
                            <li>
                                Проведение тренингов, семинаров, практикумов
                                после которых сотрудники более эффективно будут
                                пользоваться ИТ-средствами
                            </li>
                        </ul>
                    </GridColumn>
                    <GridColumn
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Image rounded alt="" src="/back-logo-1.png" />
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default GoalsBlock;
