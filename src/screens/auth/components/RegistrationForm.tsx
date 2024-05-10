"use client";

import React, { useState } from "react";
import {
    Form,
    FormField,
    Input,
    Button,
    Container,
    Header,
    Message,
    MessageContent,
} from "@/UI/SUI";
import { STATUS, UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";

interface RegistrationFormProps {
    onLoginClick: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
    onLoginClick,
}) => {
    const router = useRouter();

    const [firstname, setFirstname] = React.useState<string>("");
    const [lastname, setLastname] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    async function submitHandler() {
        setLoading(true);
        const res = await UserService.userRegistration(email, email, password);
        console.log(res);
        if (res.status === STATUS.OK) {
            console.log("succesfully");
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
                Регистрация
            </Header>
            <Form>
                <FormField>
                    <label>Имя</label>
                    <Input
                        placeholder="Введите ваше имя"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setFirstname(event.target.value);
                        }}
                    />
                </FormField>
                <FormField>
                    <label>Фамилия</label>
                    <Input
                        placeholder="Введите вашу фамилию"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setLastname(event.target.value);
                        }}
                    />
                </FormField>
                <FormField>
                    <label>Email</label>
                    <Input
                        placeholder="Введите вашу почту"
                        type="email"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setEmail(event.target.value);
                        }}
                    />
                </FormField>
                <FormField>
                    <label>Пароль</label>
                    <Input
                        placeholder="Введите ваш пароль"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setPassword(event.target.value);
                        }}
                        type="password"
                    />
                </FormField>
                <FormField>
                    <label>Подтверждение пароля</label>
                    <Input
                        placeholder="Подтвердите ваш пароль"
                        type="password"
                    />
                </FormField>
                {error && (
                    <Container style={{ color: "red", textAlign: "center" }}>
                        {error}
                    </Container>
                )}
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
                    loading={loading}
                >
                    Зарегистрироваться
                </Button>
                <Container
                    style={{
                        fontSize: "12px",
                        marginTop: "10px",
                        textAlign: "center",
                    }}
                >
                    <p>
                        Уже есть аккаунт?{" "}
                        <span
                            onClick={onLoginClick}
                            style={{ cursor: "pointer", color: "#007397" }}
                        >
                            Войти
                        </span>
                    </p>
                </Container>
            </Form>
        </Container>
    );
};

export default RegistrationForm;
