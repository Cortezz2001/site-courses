import { Container, Grid, GridColumn, GridRow, Header } from "@/UI/SUI";
import { useTranslations } from "next-intl";

const LearningPath = () => {
    const t = useTranslations("IntensivesPage");
    return (
        <>
            <Header as="h2" style={{ marginBottom: "30px" }}>
                {t('howToLearn')}
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
                            {t('block1')}
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
                            {t('block2')}
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
                            {t('block3')}
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default LearningPath;
