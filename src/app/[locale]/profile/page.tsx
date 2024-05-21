import { Profile } from "@/screens/profilePage/page";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "Личный кабинет",
    description:
        "Личный кабинет Lion IT School.",
    keywords: [
        "Личный кабинет",
        "Lion IT School",
        "информационные технологии",
        "обучение",
        "повышение квалификации",
    ],
};

export default function Home() {
    return <Profile />;
}
