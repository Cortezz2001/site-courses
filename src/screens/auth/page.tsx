import { Layout } from "@/layouts/layout";
import { Button, Container, Form, FormField, Header } from "@/UI/SUI";

export default function Auth() {
    return (
        <Layout>
            <Container style={{ marginTop: "50px" }}>
                <Header
                    as="h2"
                    style={{ marginBottom: "50px", textAlign: "center" }}
                >
                    LION IT SCHOOL
                </Header>
                <Container
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Container
                        style={{
                            boxShadow: "0px 0px 5px 2px #007397",
                            borderRadius: "10px",
                            padding: "30px",
                            width: "400px",
                        }}
                    >
                        <Header as="h3" textAlign="center">
                            Вход
                        </Header>
                        <Form>
                            <FormField>
                                <label>Логин</label>
                                <input placeholder="Введите почту" />
                            </FormField>
                            <FormField>
                                <label>Пароль</label>
                                <input
                                    placeholder="Введите пароль"
                                    type="password"
                                />
                                <Container
                                    style={{
                                        fontSize: "12px",
                                        marginTop: "5px",
                                        textAlign: "left",
                                    }}
                                >
                                    <a href="#">Забыли пароль?</a>
                                </Container>
                            </FormField>
                            <Button
                                type="submit"
                                fluid
                                style={{
                                    backgroundColor: "#007397",
                                    color: "white",
                                    marginTop: "20px",
                                }}
                            >
                                Войти
                            </Button>
                            <Container
                                style={{
                                    fontSize: "12px",
                                    marginTop: "20px",

                                    textAlign: "center",
                                }}
                            >
                                <p>
                                    У вас нет учетной записи?{" "}
                                    <a href="#">Зарегистрироваться</a>
                                </p>
                            </Container>
                        </Form>
                    </Container>
                </Container>
            </Container>
        </Layout>
    );
}
