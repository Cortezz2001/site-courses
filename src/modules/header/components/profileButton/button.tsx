"use client";

import {
    Button,
} from "@/UI/SUI";
import { UserService } from "@/service/authService/auth";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileButton = () => {
    const router = useRouter()
    const locale = useLocale();
    async function AuthCheck() {
        const token = localStorage.getItem("token")

        if (token) {
            const res = await UserService.userAuthCheck(token)
            if (res) {
                router.push(`/${locale}/profile`)
            }
            else {
                localStorage.removeItem("token")
                router.push(`/${locale}/auth`)
            }
        }
        else {
            router.push(`/${locale}/auth`)
        }

    }
    const t = useTranslations("Header");
    return (
        <Button
            style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px 20px",
                margin: "auto",
                backgroundColor: "white",
                color: "#007397",
            }}
            onClick={() => { AuthCheck() }}
        >
            {t('account')}
        </Button>
    );
};
export default ProfileButton;
