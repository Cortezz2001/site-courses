import React, { useState } from "react";
import { Form, FormField, Input, Button, Container, Header } from "@/UI/SUI";

interface LoginFormProps {
    onRegistrationClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onRegistrationClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            email: email,
            password: password,
        };
        console.log(formData);
    };

    return (
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
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <label>Email</label>
                    <Input
                        placeholder="Введите вашу почту"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormField>
                <FormField>
                    <label>Пароль</label>
                    <Input
                        placeholder="Введите ваш пароль"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </FormField>
                <Container
                    style={{
                        fontSize: "12px",
                        marginTop: "5px",
                        textAlign: "left",
                    }}
                >
                    <a style={{ cursor: "pointer", color: "#007397" }}>
                        Забыли пароль?
                    </a>
                </Container>
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
                        marginTop: "10px",
                        textAlign: "center",
                    }}
                >
                    <p>
                        У вас нет учетной записи?{" "}
                        <span
                            onClick={onRegistrationClick}
                            style={{ cursor: "pointer", color: "#007397" }}
                        >
                            Зарегистрироваться
                        </span>
                    </p>
                </Container>
            </Form>
        </Container>
    );
};

export default LoginForm;
