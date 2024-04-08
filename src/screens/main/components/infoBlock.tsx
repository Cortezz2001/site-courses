import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";

const InfoBlock: React.FC = () => {
    return (
        <Container style={{ marginTop: "30px" }}>
            <Header as="h2" style={{ marginBottom: "30px" }}>
                Практика на реальных примерах и задачах
            </Header>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <Image rounded alt="" src="/programmer-stock.jpg" />
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Container textAlign="justified">
                            <p>
                                В LION IT-SCHOOL любой может начать с нуля и
                                освоить программирование, получить новую
                                профессию в сфере IT, найти новое увлечение,
                                завести новых друзей и, самое главное, воплотить
                                свою мечту и профессиональным стать
                                разработчиком.
                            </p>
                            <p>
                                Мы ценим творческий подход и свободу мысли. Наши
                                наставники готовы поддержать самые амбициозные
                                идеи и помочь в их реализации.
                            </p>
                            <p>
                                Занятия проходят в удобное для вас время —
                                обычно в выходные и вечером, чтобы совместить их
                                с работой или учебой.
                            </p>
                            <p>
                                Мы предлагаем различные форматы (онлайн и
                                офлайн), чтобы сделать процесс обучения
                                максимально гибким и удобным. Присоединяйтесь к
                                нам в LION IT-SCHOOL, мы ждем вас!
                            </p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default InfoBlock;
