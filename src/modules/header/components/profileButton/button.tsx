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
        const email_ = localStorage.getItem("email") as string
        const isAuth_ = localStorage.getItem("isAuth") as string

        if (isAuth_ === null) localStorage.setItem("isAuth", JSON.stringify(false))
        if (email_ === null) router.push("/auth")
        if (email_ == "") return false

        if (JSON.parse(isAuth_) === false) {
            router.push("/auth")
            // const res = UserService.userAuthCheck(email_)
            // res.then(res => {
            //     if (res.status == "succesfully") {
            //         router.push("/profile")
            //     }
            //     else {
            //         router.push("/auth")
            //     }
            // })
        }
        else {
            router.push("/profile")
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
