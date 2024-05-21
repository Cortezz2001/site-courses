import {
    Container,
    Header,
    Grid,
    Image,
    GridRow,
    GridColumn,
    Icon,
    Divider,
} from "@/UI/SUI";
import { useTranslations } from "next-intl";

const DirectionsBlock: React.FC = () => {
    const t = useTranslations("AboutSchoolPage.Block5");
    return (
        <>
            <Grid
                columns={3}
                stackable
                style={{
                    marginTop: "50px",
                    marginBottom: "50px ",
                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                    padding: "30px",
                    borderRadius: "10px",
                    marginLeft: "0",
                    marginRight: "0",
                }}
            >
                <GridRow>
                    <Header
                        as="h2"
                        icon
                        textAlign="center"
                        style={{ marginBottom: "30px" }}
                    >
                        <Icon
                            name="graduation cap"
                            style={{ color: "#007397" }}
                        />
                        {t('title')}
                    </Header>
                </GridRow>
                <GridRow centered>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon name="laptop" style={{ color: "#007397" }} />
                            {t('title1')}
                        </Header>
                        <p>
                            {t('p1')}
                        </p>
                        <p>{t('p1-1')}</p>
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon
                                name="code branch"
                                style={{ color: "#007397" }}
                            />
                            {t('title2')}
                        </Header>
                        <p>
                            {t('p2')}
                        </p>
                        <p>
                            {t('p2-1')}
                        </p>
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon
                                name="mobile alternate"
                                style={{ color: "#007397" }}
                            />
                            {t('title3')}
                        </Header>
                        <p>
                            {t('p3')}
                        </p>
                        <p>
                            {t('p3-1')}
                        </p>
                    </GridColumn>
                </GridRow>
                <GridRow centered style={{ marginTop: "10px" }}>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon
                                name="database"
                                style={{ color: "#007397" }}
                            />
                            {t('title4')}
                        </Header>
                        <p>{t('p4')}</p>
                        <p>
                            {t('p4-1')}
                        </p>
                    </GridColumn>
                    <GridColumn verticalAlign="middle">
                        <Header as="h3" textAlign="center">
                            <Icon name="wifi" style={{ color: "#007397" }} />
                            {t('title5')}
                        </Header>
                        <p>{t('p5')}</p>
                        <p>{t('p5-1')}</p>
                        <p>
                            {t('p5-2')}
                        </p>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default DirectionsBlock;
