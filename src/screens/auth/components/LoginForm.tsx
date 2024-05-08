"use client";

import React, { useState } from "react";
import { Form, FormField, Input, Button, Container, Header } from "@/UI/SUI";
import { STATUS, UserService } from "@/service/authService/auth";
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
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [error, setError] = useState<string>("");
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    async function submitHandler() {
        setLoading(true);
        const res = await UserService.userAuth(email, password);
        console.log(res);
        if (res.status === STATUS.OK) {
            console.log("succesfully");
            localStorage.setItem("token", res.data.token);
            router.push("/profile");
            setLoading(false);
        } else {
            for (let key in res.data) {
                res.data[key].map((message: string) => setError(message));
            }
        }
        setLoading(false);
    }

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
                {error && (
                    <Container
                        style={{
                            color: "red",
                            textAlign: "center",
                            marginTop: "10px",
                        }}
                    >
                        {error}
                    </Container>
                )}
                <Button
                    disabled={loading}
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
                    loading={loading}
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
