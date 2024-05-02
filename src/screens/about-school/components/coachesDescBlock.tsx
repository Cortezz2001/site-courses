import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";

const CoachesDecsBlock: React.FC = () => {
    return (
        <>
            <Grid
                divided
                style={{
                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                    padding: "30px",
                    borderRadius: "10px",
                    marginTop: "30px",
                    marginLeft: "0",
                    marginRight: "0",
                }}
            >
                <GridRow centered>
                    <Header as="h2">
                        Наши преподаватели — профессионалы из разных сфер
                    </Header>
                    <p>
                        В качестве преподавателей мы приглашаем специалистов,
                        которые знают IT изнутри: владельцев бизнеса,
                        руководителей, менеджеров, ученых и сотрудников
                        университетов. Эти специалисты ведут лекции и семинары,
                        отвечают на вопросы студентов, помогают с домашними
                        заданиями и консультируют индивидуально.
                    </p>
                </GridRow>
            </Grid>
        </>
    );
};

export default CoachesDecsBlock;
