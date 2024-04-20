import Help from "@/screens/help/page";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "Вопросы и ответы - Lion IT School",
    description:
        "Найдите ответы на часто задаваемые вопросы о курсах, преподавателях, расписании и других важных аспектах обучения в Lion IT School.",
    keywords: [
        "вопросы и ответы",
        "FAQ",
        "Lion IT School",
        "курсы",
        "обучение",
    ],
};
export default function Home() {
    return <Help />;
}
