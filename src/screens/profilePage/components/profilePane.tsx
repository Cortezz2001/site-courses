"use client"
import { Card, Button, Icon } from "@/UI/SUI";
import { STATUS, UserService } from "@/service/authService/auth";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";



const ProfilePane: React.FC = () => {
    const router = useRouter()
    const locale = useLocale();
    const t = useTranslations("Profile.Main");
    React.useLayoutEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            UserService.userAuthCheck(token).then(
                (res => {
                    if (res) {
                        console.log("succesfully")
                        router.push(`/${locale}/profile`)
                    }
                    else {
                        localStorage.removeItem("token")
                        router.push(`/${locale}/auth`)
                    }
                })
            )
        }
        else {
            router.push(`/${locale}/auth`)
        }
    }, [])

    async function ClickHandler() {
        const token = localStorage.getItem("token")

        if (token) {
            const res = await UserService.userLogout(token)
            if (res.status === STATUS.OK) {
                localStorage.removeItem("token")
                router.push(`/${locale}/auth`)
            }
        }
    }

    const logoutButton = (
        <Button
            negative
            style={{
                backgroundColor: "#007397",
            }}
            onClick={ClickHandler}
        >
            <Icon name="sign-out" />
            {t('logout')}
        </Button>
    );

    return (
        <Card
            fluid
            header={t('user')}
            meta={t('reg') + ` ${new Date().toLocaleDateString()}`}
            extra={logoutButton}
            style={{ boxShadow: "none" }}
        />
    );
};

export default ProfilePane;
