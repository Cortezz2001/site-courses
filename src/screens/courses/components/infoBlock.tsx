import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import { useTranslations } from "next-intl";
import style from "../style.module.css";

const InfoBlock: React.FC = () => {
    const t = useTranslations("CoursesPage");
    return (
        <>
            <Header as="h2" className={style.info_block_heading}>
                {t("programmingLearn")}
            </Header>
            <Grid columns={2} divided>
                <GridRow className={style.info_block_container}>
                    <GridColumn className={style.info_block_left}>
                        <Image
                            rounded
                            alt=""
                            src="/programmers-stock.png"
                            className={style.info_block_image}
                        />
                    </GridColumn>
                    <GridColumn
                        verticalAlign="middle"
                        className={style.info_block_right}
                    >
                        <Container textAlign="justified">
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                            <p>{t("p3")}</p>
                            <p>{t("p4")}</p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default InfoBlock;
