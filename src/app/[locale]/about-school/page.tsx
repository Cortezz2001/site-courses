import AboutSchool from "@/screens/about-school/page";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import "semantic-ui-css/semantic.min.css";
type Props = {
    params: {locale: string};
  };
  
export const metadata: Metadata = {
    title: "О нашей школе - Lion IT School",
    description:
        "Узнайте больше о Lion IT School - нашей миссии, ценностях, преподавательском составе и учебных программах. Присоединяйтесь к нашему сообществу и начните свой путь к успеху в сфере информационных технологий.",
    keywords: [
        "о нашей школе",
        "Lion IT School",
        "миссия",
        "ценности",
        "преподаватели",
        "учебные программы",
        "информационные технологии",
        "обучение",
    ],
};
export default function Home({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
    return <AboutSchool />;
}
