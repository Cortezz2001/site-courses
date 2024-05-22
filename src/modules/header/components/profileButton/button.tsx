"use client";

import { Button } from "@/UI/SUI";
import ButtonMarker from "./marker";
import { UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileButton = () => {
    const router = useRouter();

    async function AuthCheck() {
        const token = localStorage.getItem("token");

        if (token) {
            const res = await UserService.userAuthCheck(token);
            if (res) {
                router.push("/profile");
            } else {
                localStorage.removeItem("token");
                router.push("/auth");
            }
        } else {
            router.push("/auth");
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
            onClick={() => {
                AuthCheck();
            }}
        >
            <ButtonMarker />
        </Button>
    );
};
export default ProfileButton;
