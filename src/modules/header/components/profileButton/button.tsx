"use client";

import {
    Button,
} from "@/UI/SUI";
import { UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileButton = () => {
    const router = useRouter()


    const AuthCheck = () => {
        const token = localStorage.getItem("token") as string

        if (token === null) router.push("/auth")

        if (token !== null) {
            const res = UserService.userAuthCheck(token)
            res.then(res => {
                if (res.status === "ok") {
                    router.push("/profile")
                }
                else {
                    router.push("/auth")
                }
            })
        }
    }

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
            Личный кабинет
        </Button>
    );
};
export default ProfileButton;
