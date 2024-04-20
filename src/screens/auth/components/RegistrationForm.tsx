import React from "react";
import { Form, FormField, Input, Button, Container, Header } from "@/UI/SUI";

interface RegistrationFormProps {
    onLoginClick: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
    onLoginClick,
}) => {
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
                    <Input placeholder="Введите ваше имя" />
                </FormField>
                <FormField>
                    <label>Фамилия</label>
                    <Input placeholder="Введите вашу фамилию" />
                </FormField>
                <FormField>
                    <label>Email</label>
                    <Input placeholder="Введите вашу почту" />
                </FormField>
                <FormField>
                    <label>Пароль</label>
                    <Input placeholder="Введите ваш пароль" type="password" />
                </FormField>
                <FormField>
                    <label>Подтверждение пароля</label>
                    <Input
                        placeholder="Подтвердите ваш пароль"
                        type="password"
                    />
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
