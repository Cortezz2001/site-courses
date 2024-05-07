"use client"
import { Card, Button, Icon } from "@/UI/SUI";
import { UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";
import React from "react";



const ProfilePane: React.FC = () => {
    const router = useRouter()

    React.useLayoutEffect(() => {
        const token = localStorage.getItem("token") as string

        if (token === null) {
            router.push("/auth")
        }
        else {
            const res = UserService.userAuthCheck(token)
            res.then(res => {
                if (res.status !== "ok") {
                    router.push("/auth")
                }
            })
        }
    }, [])

    const ClickHandler = () => {
        const token = localStorage.getItem("token") as string

        if (token === null) router.push("/auth")

        const res = UserService.userLogout(token)
        res.then(res => {
            if (res.status === "ok") {
                localStorage.removeItem("token")
                router.push("/auth")
            }
        })
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
            Выйти из аккаунта
        </Button>
    );

    return (
        <Card
            fluid
            header="Пользователь"
            meta={`Зарегестрирован ${new Date().toLocaleDateString()}`}
            extra={logoutButton}
            style={{ boxShadow: "none" }}
        />
    );
};

export default ProfilePane;
