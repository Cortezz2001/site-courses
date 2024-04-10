import {
    Container,
    Header,
    Grid,
    Image,
    GridRow,
    GridColumn,
    Icon,
} from "@/UI/SUI";

const AdvantagesBlock: React.FC = () => {
    return (
        <>
            <Grid columns={2} divided style={{ marginTop: "30px" }}>
                <GridRow>
                    <GridColumn
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Image rounded alt="" src="/programmers-stock-2.png" />
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Header as="h2">
                            Преимущества обучения в «Lion IT-SCHOOL»
                        </Header>
                        <p>
                            <strong>Практическое обучение:</strong>{" "}
                            Сосредоточение на реальных проектах и развитие
                            навыков от начального до продвинутого уровня
                        </p>
                        <p>
                            <strong>Индивидуализированный подход:</strong>{" "}
                            Адаптация учебного плана под уровень и потребности
                            каждого студента.
                        </p>
                        <p>
                            <strong>Сетевые возможности:</strong> Возможность
                            создания связей с профессионалами в индустрии и
                            потенциальными работодателями.
                        </p>
                        <p>
                            <strong>Умения:</strong> IT-школа предоставляет
                            уникальную возможность приобрести практические
                            навыки в программировании, веб-разработке, мобильной
                            разработке и других сферах IT, поддерживаемых
                            квалифицированными преподавателями и индустрией.
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default AdvantagesBlock;
