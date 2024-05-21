import { Container, Grid, GridColumn, GridRow, Image } from "@/UI/SUI";
import { useTranslations } from "next-intl";

const ImageBlock = () => {
    const t = useTranslations("IntensivesPage");
    return (
        <>
            <Grid divided style={{ paddingBottom: "30px" }}>
                <GridRow centered>
                    <GridColumn centered>
                        <Image
                            rounded
                            alt=""
                            src="/notebook-with-code.jpeg"
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "600px",
                            }}
                        />
                        <Container
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "20%",
                                transform: "translate(-50%, -50%)",
                                color: "white",
                                padding: "25px",
                                width: "30%",
                            }}
                        >
                            <h2>{t('imageTitle')}</h2>
                            <p>{t('imageP1')}</p>
                            <p>
                                {t('imageP2')}
                            </p>
                            <p>
                                {t('imageP3')}
                            </p>
                            <p>{t('imageP4')}</p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default ImageBlock;
