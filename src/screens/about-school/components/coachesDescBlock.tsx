import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";

const CoachesDecsBlock: React.FC = () => {
    return (
        <Container style={{ marginTop: "30px" }}>
            <Grid divided>
                <GridRow centered>
                    <Container
                        style={{
                            boxShadow: "0px 0px 5px 2px #007397",
                            padding: "30px",
                            borderRadius: "10px",
                        }}
                    >
                        <Header as="h2">
                            Наши преподаватели — профессионалы из разных сфер
                        </Header>
                        <p>
                            В качестве преподавателей мы приглашаем
                            специалистов, которые знают IT изнутри: владельцев
                            бизнеса, руководителей, менеджеров, ученых и
                            сотрудников университетов. Эти специалисты ведут
                            лекции и семинары, отвечают на вопросы студентов,
                            помогают с домашними заданиями и консультируют
                            индивидуально.
                        </p>
                    </Container>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default CoachesDecsBlock;
