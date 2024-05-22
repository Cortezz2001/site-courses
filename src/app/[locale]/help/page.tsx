import Help from "@/screens/help/page";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import "semantic-ui-css/semantic.min.css";
type Props = {
    params: {locale: string};
  };
  
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
export default function Home({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
    return <Help />;
}
