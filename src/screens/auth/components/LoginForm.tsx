"use client";

import React, { useState } from "react";
import { Form, FormField, Input, Button, Container, Header } from "@/UI/SUI";
import { STATUS, UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

interface LoginFormProps {
    onRegistrationClick: () => void;
    onLostPasswordClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
    onRegistrationClick,
    onLostPasswordClick,
}) => {
    const t = useTranslations("AuthPage");
    const locale = useLocale();
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
            router.push(`/${locale}/profile`);
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
                boxShadow: "0px 0px 5px 2px #e0e0e0",
                borderRadius: "10px",
                padding: "30px",
                width: "400px",
            }}
        >
            <Header as="h3" textAlign="center">
                {t('authorization')}
            </Header>
            <Form onSubmit={submitHandler}>
                <FormField
                    required
                    label="Email"
                    type="email"
                    control={Input}
                    placeholder={t('emailPlaceholder')}
                    value={email}
                    onChange={handleEmailChange}
                />

                <FormField
                    required
                    label={t('password')}
                    control={Input}
                    placeholder={t('passwordPlaceholder')}
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

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
                        {t('forgotPass')}
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
                    fluid
                    style={{
                        backgroundColor: "#007397",
                        color: "white",
                        marginTop: "20px",
                    }}
                    loading={loading}
                >
                    {t('authBtn')}
                </Button>
                <Container
                    style={{
                        fontSize: "12px",
                        marginTop: "10px",
                        textAlign: "center",
                    }}
                >
                    <p>
                        {t('dontHaveAccount')}{" "}
                        <span
                            onClick={onRegistrationClick}
                            style={{ cursor: "pointer", color: "#007397" }}
                        >
                            {t('registration')}
                        </span>
                    </p>
                </Container>
            </Form>
        </Container>
    );
};

export default LoginForm;
