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

const ActionBlock: React.FC = () => {
    const telegramLink = "https://t.me/+b8klQ4VDBX82Y2Iy";

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
                            Присоединяйся к нашему Telegram-каналу, чтобы
                            обсудить,
                            <br />
                            как начать программировать с нуля, получить новую
                            профессию в IT
                            <br />и завести новых друзей!
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
                                    Ждём тебя!
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
