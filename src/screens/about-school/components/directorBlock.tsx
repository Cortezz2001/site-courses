import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import { useTranslations } from "next-intl";

const DirectorBlock: React.FC = () => {
    const t = useTranslations("AboutSchoolPage.Block3");
    return (
        <>
            <Grid columns={2} divided style={{ marginTop: "30px" }}>
                <GridRow>
                    <GridColumn verticalAlign="middle" width={11}>
                        <Container
                            style={{
                                paddingRight: "30px",
                                paddingLeft: "20px",
                            }}
                        >
                            <Header as="h2">{t('title')}</Header>
                            <p>{t('p1')} </p>
                            <p>
                                {" "}
                                {t('p2')}{" "}
                            </p>
                            <p>
                                <strong>{t('p3')}</strong> {t('p3-1')}
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
