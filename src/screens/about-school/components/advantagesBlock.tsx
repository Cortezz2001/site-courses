import { Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import { useTranslations } from "next-intl";
import style from "../style.module.css";

const AdvantagesBlock: React.FC = () => {
    const t = useTranslations("AboutSchoolPage.Block2");
    return (
        <>
            <Grid columns={2} divided style={{ marginTop: "30px" }}>
                <GridRow className={style.advantages_container}>
                    <GridColumn
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                        }}
                        className={style.advantages_image}
                    >
                        <Image
                            rounded
                            alt=""
                            src="/programmers-stock-2.png"
                            style={{ objectFit: "cover" }}
                        />
                    </GridColumn>
                    <GridColumn
                        verticalAlign="middle"
                        className={style.advantages_text}
                    >
                        <Header as="h2">{t("title")}</Header>
                        <p>
                            <strong>{t("p1")}</strong> {t("p1-1")}
                        </p>
                        <p>
                            <strong>{t("p2")}</strong> {t("p2-1")}
                        </p>
                        <p>
                            <strong>{t("p3")}</strong> {t("p3-1")}
                        </p>
                        <p>
                            <strong>{t("p4")}</strong> {t("p4-1")}
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default AdvantagesBlock;
