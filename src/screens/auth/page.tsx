"use client";
import { useState } from "react";
import { Layout } from "@/layouts/layout";
import LoginForm from "@/screens/auth/components/LoginForm";
import RegistrationForm from "@/screens/auth/components/RegistrationForm";

export default function Auth() {
    const [showLogin, setShowLogin] = useState(true);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleRegistrationClick = () => {
        setShowLogin(false);
    };

    return (
        <Layout>
            <>
                {showLogin ? (
                    <LoginForm onRegistrationClick={handleRegistrationClick} />
                ) : (
                    <RegistrationForm onLoginClick={handleLoginClick} />
                )}
            </>
        </Layout>
    );
}
