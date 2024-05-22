import { Courses } from "@/screens/courses/page";
import { LANGUAGES } from "@/service/consts";
import { CoursesService } from "@/service/coursesService/service";
import { ICourseCardInfo } from "@/service/coursesService/types";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { cookies } from "next/headers";
import "semantic-ui-css/semantic.min.css";
type Props = {
    params: {locale: string};
  };
  
export const metadata: Metadata = {
    title: "Курсы - Lion IT School",
    description:
        "Изучайте широкий спектр курсов по информационным технологиям в Lion IT School",
    keywords: [
        "курсы",
        "Lion IT School",
        "информационные технологии",
        "обучение",
        "обучение программированию",
        "Айти курсы",
    ],
};

export default async function Home({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
    const cookieStore = cookies()
    const languageCookie = cookieStore.get("NEXT_LOCALE");
    const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
    const courses_: ICourseCardInfo[] = await CoursesService.getCourses(language);
    return <Courses coursesInfo={courses_} />;
}
