import { Profile } from "@/screens/profilePage/page";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import "semantic-ui-css/semantic.min.css";
type Props = {
    params: {locale: string};
  };
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

export default function Home({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
    return <Profile />;
}
