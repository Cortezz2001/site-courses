import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import { useTranslations } from "next-intl";

const InfoBlock: React.FC = () => {
    const t = useTranslations("Main.Block2");
    return (
        <>
            <Header as="h2" style={{ marginTop: "45px", marginBottom: "30px" }}>
                {t('title1')}
            </Header>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <Image rounded alt="" src="/programmer-stock.jpg" />
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Container
                            textAlign="justified"
                            style={{ fontSize: "large" }}
                        >
                            <p>
                                {t('p1')}
                            </p>
                            <p>
                                {t('p1-1')}
                            </p>
                            <p>
                                {t('p1-2')}
                            </p>
                            <p>
                                {t('p1-3')}
                            </p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>

            <Header as="h2" style={{ marginTop: "45px", marginBottom: "30px" }}>
                {t('title2')}
            </Header>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn verticalAlign="middle">
                        <Container
                            textAlign="justified"
                            style={{ fontSize: "large" }}
                        >
                            <p>
                                {t('p2')}
                            </p>
                            <p>
                                {t('p2-1')}
                            </p>
                        </Container>
                    </GridColumn>
                    <GridColumn>
                        <Image rounded alt="" src="/programmers-stock-3.png" />
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default InfoBlock;
