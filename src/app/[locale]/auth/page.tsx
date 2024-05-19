import Auth from "@/screens/auth/page";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "Личный кабинет - Lion IT School",
    description: "Авторизация и регистрация",
    keywords: ["Вход", "Lion IT School"],
};
export default function Home() {
    return <Auth />;
}
