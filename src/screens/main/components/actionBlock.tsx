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
        <Container style={{ marginTop: "30px" }}>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn verticalAlign="middle">
                        <Container textAlign="center">
                            <p>
                                Присоединяйся к нашему Telegram-каналу, чтобы
                                обсудить, как начать программировать с нуля,
                                получить новую профессию в IT и завести новых
                                друзей!
                            </p>
                            <a
                                href={telegramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button animated="vertical">
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
                        <Image
                            rounded
                            alt=""
                            src="/programmer-stock-cropped.jpg"
                        />
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default ActionBlock;
