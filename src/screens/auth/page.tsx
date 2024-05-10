"use client";

import { useState } from "react";
import { Layout } from "@/layouts/layout";
import LoginForm from "@/screens/auth/components/LoginForm";
import RegistrationForm from "@/screens/auth/components/RegistrationForm";
import LostPasswordForm from "@/screens/auth/components/LostPasswordForm";
import { Container } from "semantic-ui-react";

enum AuthForms {
    LOGIN,
    REGISTRATION,
    LOST_PASSWORD,
}

export default function Auth() {
    const [activeForm, setActiveForm] = useState(AuthForms.LOGIN);

    const switchToLogin = () => setActiveForm(AuthForms.LOGIN);
    const switchToRegistration = () => setActiveForm(AuthForms.REGISTRATION);
    const switchToLostPassword = () => setActiveForm(AuthForms.LOST_PASSWORD);

    return (
        <Layout>
            <>
                <Container style={{ marginTop: "30px" }}>
                    {activeForm === AuthForms.LOGIN && (
                        <LoginForm
                            onRegistrationClick={switchToRegistration}
                            onLostPasswordClick={switchToLostPassword}
                        />
                    )}
                    {activeForm === AuthForms.REGISTRATION && (
                        <RegistrationForm onLoginClick={switchToLogin} />
                    )}
                    {activeForm === AuthForms.LOST_PASSWORD && (
                        <LostPasswordForm onCancelClick={switchToLogin} />
                    )}
                </Container>
            </>
        </Layout>
    );
}
