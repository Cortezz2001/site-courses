import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import { useTranslations } from "next-intl";

const InfoBlock: React.FC = () => {
    const t = useTranslations("CoursesPage");
    return (
        <>
            <Header as="h2" style={{ marginBottom: "30px", marginTop: "30px" }}>
                {t('programmingLearn')}
            </Header>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <Image rounded alt="" src="/programmers-stock.png" />
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Container textAlign="justified">
                            <p>
                                {t('p1')}
                            </p>
                            <p>
                                 {t('p2')}
                            </p>
                            <p>
                                {t('p3')}
                            </p>
                            <p>
                                {t('p4')}
                            </p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default InfoBlock;
