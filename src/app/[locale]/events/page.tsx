import { Events } from "@/screens/events/page";
import { LANGUAGES } from "@/service/consts";
import { EventsService } from "@/service/eventsService/service";
import { IEventCardInfo } from "@/service/eventsService/types";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { cookies } from "next/headers";
import "semantic-ui-css/semantic.min.css";
type Props = {
    params: {locale: string};
  };
  
export const metadata: Metadata = {
    title: "Анонсы - Lion IT School",
    description:
        "Будьте в курсе последних событий и анонсов в Lion IT School. Узнайте о предстоящих мероприятиях, курсах, вебинарах и других интересных событиях.",
    keywords: [
        "анонсы",
        "события",
        "мероприятия",
        "Lion IT School",
        "курсы",
        "вебинары",
    ],
};
export default async function Home({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
    const cookieStore = cookies();
    const languageCookie = cookieStore.get("NEXT_LOCALE");
    const language: LANGUAGES = languageCookie
        ? (languageCookie.value as LANGUAGES)
        : LANGUAGES.RU;
    const events_: IEventCardInfo[] = await EventsService.getEvents(language);
    return <Events eventsInfo={events_} />;
}
