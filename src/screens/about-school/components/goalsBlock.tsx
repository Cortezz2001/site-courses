import { Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import { useTranslations } from "next-intl";
import style from "../style.module.css";

const GoalsBlock: React.FC = () => {
    const t = useTranslations("AboutSchoolPage.Block1");
    return (
        <>
            <Grid columns={2} divided style={{ marginTop: "30px" }}>
                <GridRow>
                    <GridColumn
                        verticalAlign="middle"
                        className={style.goals_text}
                    >
                        <Header
                            as="h2"
                            style={{
                                paddingLeft: "20px",
                            }}
                        >
                            {t("title")}
                        </Header>
                        <ul
                            style={{
                                paddingLeft: "40px",
                            }}
                        >
                            <li>{t("p1")}</li>
                            <li>{t("p2")}</li>
                            <li>{t("p3")}</li>
                            <li>{t("p4")}</li>
                            <li>{t("p5")}</li>
                        </ul>
                    </GridColumn>
                    <GridColumn
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                        }}
                        className={style.goals_image}
                    >
                        <Image
                            rounded
                            alt=""
                            src="/back-logo-1.png"
                            style={{ objectFit: "cover" }}
                        />
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default GoalsBlock;
