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

import style from "../style.module.css";

const ActionBlock: React.FC = () => {
    const telegramLink = "https://t.me/+b8klQ4VDBX82Y2Iy";

    return (
        <Grid className={style.action_block_wrapper} columns={2} divided>
            <GridRow className={style.action_block_container}>
                <GridColumn
                    verticalAlign="middle"
                    className={style.action_block_left}
                >
                    <Container textAlign="center" style={{ fontSize: "large" }}>
                        <p className={style.action_block_text}>
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
                <GridColumn className={style.action_block_right}>
                    <Image rounded alt="" src="/programmer-stock-cropped.jpg" />
                </GridColumn>
            </GridRow>
        </Grid>
    );
};

export default ActionBlock;
