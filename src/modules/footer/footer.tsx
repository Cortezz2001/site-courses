import Link from "next/link";
import style from "./style.module.css";
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
                                ></Button>
                                <Button circular inverted icon="vk"></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="youtube"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="pinterest"
                                ></Button>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                style={{ paddingLeft: "20px" }}
                            >
                                <List link inverted>
                                    <ListItem as="a">Link 1</ListItem>
                                    <ListItem as="a">Link 2</ListItem>
                                    <ListItem as="a">Link 3</ListItem>
                                </List>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                style={{ paddingLeft: "20px" }}
                            >
                                <List link inverted>
                                    <ListItem as="a">Link 4</ListItem>
                                    <ListItem as="a">Link 5</ListItem>
                                    <ListItem as="a">Link 6</ListItem>
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
                                    © Ineu, 2023-2024
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
