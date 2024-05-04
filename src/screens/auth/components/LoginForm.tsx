"use client";

import React, { useState } from "react";
import { Form, FormField, Input, Button, Container, Header } from "@/UI/SUI";
import { UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";

interface LoginFormProps {
    onRegistrationClick: () => void;
    onLostPasswordClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
    onRegistrationClick,
    onLostPasswordClick,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const submitHandler = () => {
        const res = UserService.userAuth(password, email);
        res.then((res) => {
            console.log(res);
            if (res.status === "succesfully") {
                localStorage.setItem("email", email);
                localStorage.setItem("isAuth", JSON.stringify(true));
                router.push("/profile");
            }
            else{
                alert(res.errors)
            }
        });
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
            <Form>
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
                    <a
                        style={{ cursor: "pointer", color: "#007397" }}
                        onClick={onLostPasswordClick}
                    >
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
                    onClick={() => {
                        submitHandler();
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
