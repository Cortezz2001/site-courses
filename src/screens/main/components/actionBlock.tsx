import {
    Container,
    Grid,
    GridRow,
    GridColumn,
    Image,
    Button,
    ButtonContent,
    Icon,
} from "@/UI/SUI";
import { useTranslations } from "next-intl";

const ActionBlock: React.FC = () => {
    const telegramLink = "https://t.me/+b8klQ4VDBX82Y2Iy";
    const t = useTranslations("Main.Block1");
    return (
        <Grid
            columns={2}
            divided
            style={{ marginTop: "30px", marginBottom: "30px" }}
        >
            <GridRow>
                <GridColumn verticalAlign="middle">
                    <Container textAlign="center" style={{ fontSize: "large" }}>
                        <p>
                            {t('p1')}
                            <br />
                            {t('p1-1')}
                            <br />{t('p1-2')}
                        </p>
                        <a
                            href={telegramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                animated="vertical"
                                style={{
                                    backgroundColor: "#007397",
                                    color: "white",
                                }}
                            >
                                <ButtonContent visible>
                                    {t('btn')}
                                </ButtonContent>
                                <ButtonContent hidden>
                                    <Icon name="telegram plane" />
                                </ButtonContent>
                            </Button>
                        </a>
                    </Container>
                </GridColumn>
                <GridColumn>
                    <Image rounded alt="" src="/programmer-stock-cropped.jpg" />
                </GridColumn>
            </GridRow>
        </Grid>
    );
};

export default ActionBlock;
