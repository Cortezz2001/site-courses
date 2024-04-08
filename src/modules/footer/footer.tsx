import Link from "next/link";
import {
    Button,
    Container,
    Form,
    FormField,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Input,
    List,
    ListItem,
    Segment,
    Image,
    Checkbox,
    FormCheckbox,
    Divider,
} from "@/UI/SUI";
export default function Footer() {
    return (
        <Container name="footer" fluid>
            <Segment inverted vertical style={{ padding: "5em 0" }}>
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <Grid divided inverted stackable>
                        <GridRow>
                            <GridColumn width={4} textAlign="center">
                                <Link href="/">
                                    <Image
                                        src="/logo.png"
                                        size="tiny"
                                        alt=""
                                        style={{
                                            display: "block",
                                            margin: "0 auto 10px",
                                        }}
                                    />
                                </Link>
                                <Button
                                    circular
                                    inverted
                                    icon="telegram plane"
                                    href="https://t.me/+b8klQ4VDBX82Y2Iy"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="instagram"
                                    href="https://www.instagram.com/lion.it_school?igsh=MXRhZm12cHB3cGY0cg%3D%3D&utm_source=qr"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="youtube"
                                    href="https://www.youtube.com/@lionITschool"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="tumblr"
                                    href="https://www.tiktok.com/@lionithub?_t=8lMDavWSGDW&_r=1"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="mail"
                                    href="mailto:lion.hub@mail.ru"
                                ></Button>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                style={{ paddingLeft: "20px" }}
                            >
                                <List
                                    link
                                    inverted
                                    style={{ textAlign: "center" }}
                                >
                                    <ListItem>
                                        <Link href={"/about-school"}>
                                            О НАШЕЙ ШКОЛЕ
                                        </Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href={"/events"}>АНОНСЫ</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={"/help"}>
                                            ВОПРОСЫ И ОТВЕТЫ
                                        </Link>
                                    </ListItem>
                                </List>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                style={{ paddingLeft: "20px" }}
                            >
                                <List
                                    link
                                    inverted
                                    style={{ textAlign: "center" }}
                                >
                                    <ListItem>
                                        <Link href={"/courses"}>КУРСЫ</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={"/coaches"}>ТРЕНЕРЫ</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={"/intensives"}>
                                            ИНТЕНСИВЫ
                                        </Link>
                                    </ListItem>
                                </List>
                            </GridColumn>
                            <GridColumn width={4}>
                                <p>
                                    Оставьте почту, или останетесь без крутых
                                    писем от Lion IT-School
                                </p>
                                <Form
                                    inverted
                                    style={{
                                        width: "fit-content",
                                    }}
                                >
                                    <FormField>
                                        <Input placeholder="E-mail" />
                                    </FormField>
                                    <Button fluid inverted type="submit">
                                        Отправить
                                    </Button>
                                    <FormCheckbox
                                        label="Я согласен с Политикой обработки персональных данных"
                                        style={{
                                            marginTop: "10px",
                                            fontSize: "12px",
                                        }}
                                    />
                                </Form>
                            </GridColumn>
                        </GridRow>
                        <Divider inverted />
                        <GridRow columns={3} textAlign="center">
                            <GridColumn>
                                <Header
                                    inverted
                                    as={"p"}
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                    }}
                                >
                                    © LION IT-SCHOOL, 2023-2024
                                </Header>
                            </GridColumn>
                            <GridColumn>
                                <Header
                                    inverted
                                    as={"a"}
                                    href="/"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                    }}
                                >
                                    Пользовательское соглашение
                                </Header>
                            </GridColumn>
                            <GridColumn>
                                <Header
                                    inverted
                                    as={"a"}
                                    href="/"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                    }}
                                >
                                    Договор оферты
                                </Header>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </Segment>
        </Container>
    );
}
