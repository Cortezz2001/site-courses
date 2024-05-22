import { Container, Grid, GridColumn, Image } from "@/UI/SUI";
import { useTranslations } from "next-intl";
import style from "../style.module.css";

const ImageBlock = () => {
    const t = useTranslations("IntensivesPage");
    return (
        <>
            <Grid divided className={style.banner}>
                <GridColumn centered>
                    <Image
                        rounded
                        alt=""
                        src="/notebook-with-code.jpeg"
                        className={style.banner_image}
                    />
                    <Container className={style.banner_text}>
                        <h2>{t("imageTitle")}</h2>
                        <p>{t("imageP1")}</p>
                        <p>{t("imageP2")}</p>
                        <p>{t("imageP3")}</p>
                        <p>{t("imageP4")}</p>
                    </Container>
                </GridColumn>
            </Grid>
        </>
    );
};

export default ImageBlock;
