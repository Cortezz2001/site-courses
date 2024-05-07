"use client"
import { Card, Button, Icon } from "@/UI/SUI";
import { UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";
import React from "react";



const ProfilePane: React.FC = () => {
    const router = useRouter()

    React.useLayoutEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            const res = UserService.userAuthCheck(token).then(
                (res => {
                    console.log(res)
                    if (res.status === "ok") {
                        console.log("succesfully")
                        router.push("/profile")
                    }
                    else {
                        localStorage.removeItem("token")
                        router.push("/auth")
                    }
                })
            )
        }
        else {
            router.push("/auth")
        }
    }, [])

    async function ClickHandler() {
        const token = localStorage.getItem("token")

        if (token) {
            const res = await UserService.userLogout(token)
            if (res.status === "ok") {
                localStorage.removeItem("token")
                router.push("/auth")
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
