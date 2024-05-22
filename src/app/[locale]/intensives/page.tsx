import Intensives from "@/screens/intensives/page";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import "semantic-ui-css/semantic.min.css";
type Props = {
    params: {locale: string};
  };
export const metadata: Metadata = {
    title: "Летние интенсивы - Lion IT School",
    description:
        "Изучайте информационные технологии и повышайте свои навыки на летних интенсивах в Lion IT School. Обновите знания и подготовьтесь к новым вызовам в теплой и дружественной атмосфере.",
    keywords: [
        "летние интенсивы",
        "Lion IT School",
        "информационные технологии",
        "обучение",
        "повышение квалификации",
    ],
};
export default function Home({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
    return <Intensives />;
}
