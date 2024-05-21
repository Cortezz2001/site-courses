"use client";

import React, { useState } from "react";
import {
    Form,
    FormField,
    Input,
    Button,
    Container,
    Header,
} from "@/UI/SUI";
import { STATUS, UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface RegistrationFormProps {
    onLoginClick: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
    onLoginClick,
}) => {
    const t = useTranslations("RegistrationPage");
    const router = useRouter();

    const [firstname, setFirstname] = React.useState<string>("");
    const [lastname, setLastname] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    async function submitHandler() {
        setLoading(true);
        if (password !== confirmPassword) {
            setError(t('mismatch'));
            setLoading(false);
            return;
        }
        const res = await UserService.userRegistration(
            email,
            password,
            firstname,
            lastname
        );
        console.log(res);
        if (res.status === STATUS.OK) {
            console.log("succesfully");
            onLoginClick();
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
                {t('registration')}
            </Header>
            <Form onSubmit={submitHandler}>
                <FormField
                    required
                    label={t('nameLabel')}
                    type="text"
                    control={Input}
                    placeholder={t('namePlaceholder')}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setFirstname(event.target.value);
                    }}
                />
                <FormField
                    required
                    label={t('secondNameLabel')}
                    type="text"
                    control={Input}
                    placeholder={t('secondNamePlaceholder')}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setLastname(event.target.value);
                    }}
                />
                <FormField
                    required
                    label="Email"
                    type="email"
                    control={Input}
                    placeholder={t('emailPlaceholder')}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value);
                    }}
                />
                <FormField
                    required
                    label={t('passwordLabel')}
                    type="password"
                    control={Input}
                    placeholder={t('passwordPlaceholder')}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(event.target.value);
                    }}
                />
                <FormField
                    required
                    label={t('confirmPassLabel')}
                    type="password"
                    control={Input}
                    placeholder={t('confirmPassPlaceholder')}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setConfirmPassword(event.target.value);
                    }}
                />

                {error && (
                    <Container style={{ color: "red", textAlign: "center" }}>
                        {error}
                    </Container>
                )}
                <Button
                    fluid
                    style={{
                        backgroundColor: "#007397",
                        color: "white",
                        marginTop: "20px",
                    }}
                    loading={loading}
                >
                    {t('registrationBtn')}
                </Button>
                <Container
                    style={{
                        fontSize: "12px",
                        marginTop: "10px",
                        textAlign: "center",
                    }}
                >
                    <p>
                        {t('haveAccount')}{" "}
                        <span
                            onClick={onLoginClick}
                            style={{ cursor: "pointer", color: "#007397" }}
                        >
                            {t('auth')}
                        </span>
                    </p>
                </Container>
            </Form>
        </Container>
    );
};

export default RegistrationForm;
