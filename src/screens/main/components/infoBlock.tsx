import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import { useTranslations } from "next-intl";
import style from "../style.module.css";

const InfoBlock: React.FC = () => {
    const t = useTranslations("Main.Block2");
    return (
        <>
            <Header as="h2" className={style.info_block_top_heading}>
                {t("title1")}
            </Header>
            <Grid columns={2} divided>
                <GridRow className={style.info_block_top_container}>
                    <GridColumn className={style.info_block_top_left}>
                        <Image
                            rounded
                            alt=""
                            src="/programmer-stock.jpg"
                            className={style.info_block_top_image}
                        />
                    </GridColumn>
                    <GridColumn
                        verticalAlign="middle"
                        className={style.info_block_top_right}
                    >
                        <Container
                            textAlign="justified"
                            style={{ fontSize: "large" }}
                        >
                            <p>{t("p1")}</p>
                            <p>{t("p1-1")}</p>
                            <p>{t("p1-2")}</p>
                            <p>{t("p1-3")}</p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
            <Header as="h2" className={style.info_block_bottom_heading}>
                {t("title2")}
            </Header>
            <Grid columns={2} divided>
                <GridRow className={style.info_block_bottom_container}>
                    <GridColumn
                        verticalAlign="middle"
                        className={style.info_block_bottom_left}
                    >
                        <Container
                            textAlign="justified"
                            style={{ fontSize: "large" }}
                        >
                            <p>{t("p2")}</p>
                            <p>{t("p2-1")}</p>
                        </Container>
                    </GridColumn>
                    <GridColumn className={style.info_block_bottom_right}>
                        <Image rounded alt="" src="/programmers-stock-3.png" />
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default InfoBlock;
