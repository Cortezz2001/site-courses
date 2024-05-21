import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import { useTranslations } from "next-intl";

const CoachesDecsBlock: React.FC = () => {
    const t = useTranslations("AboutSchoolPage.Block4");
    return (
        <>
            <Grid
                divided
                style={{
                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                    padding: "30px",
                    borderRadius: "10px",
                    marginTop: "30px",
                    marginLeft: "0",
                    marginRight: "0",
                }}
            >
                <GridRow centered>
                    <Header as="h2">
                        {t('title')}
                    </Header>
                    <p>
                        {t('p1')}
                    </p>
                </GridRow>
            </Grid>
        </>
    );
};

export default CoachesDecsBlock;
