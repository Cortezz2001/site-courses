import {
    Container,
    Header,
    Grid,
    Image,
    GridRow,
    GridColumn,
    Icon,
} from "@/UI/SUI";
import { useTranslations } from "next-intl";

const AdvantagesBlock: React.FC = () => {
    const t = useTranslations("AboutSchoolPage.Block2");
    return (
        <>
            <Grid columns={2} divided style={{ marginTop: "30px" }}>
                <GridRow>
                    <GridColumn
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Image rounded alt="" src="/programmers-stock-2.png" />
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Header as="h2">
                            {t('title')}
                        </Header>
                        <p>
                            <strong>{t('p1')}</strong>{" "}
                            {t('p1-1')}
                        </p>
                        <p>
                            <strong>{t('p2')}</strong>{" "}
                            {t('p2-1')}
                        </p>
                        <p>
                            <strong>{t('p3')}</strong> {t('p3-1')}
                        </p>
                        <p>
                            <strong>{t('p4')}</strong> {t('p4-1')}
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default AdvantagesBlock;
