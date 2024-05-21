import { EventDetailsPage } from "@/screens/eventPage/page";
import { LANGUAGES } from "@/service/consts";
import { EventDetailPageService } from "@/service/eventDetailPageService/service";
import { IEventDetailPageInfo } from "@/service/eventDetailPageService/types";
import { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";
import "semantic-ui-css/semantic.min.css";

type Props = {
  params: { id: number }
};

export default async function Home({ params }: Props) {
  const cookieStore = cookies();
  const languageCookie = cookieStore.get("NEXT_LOCALE");
  const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
  const eventInfo: IEventDetailPageInfo = await EventDetailPageService.getEvents(params.id, language);

  return <EventDetailsPage eventInfo={eventInfo} />;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const cookieStore = cookies();
  const languageCookie = cookieStore.get("NEXT_LOCALE");
  const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
  const eventInfo: IEventDetailPageInfo = await EventDetailPageService.getEvents(params.id, language);

  return {
    title: eventInfo.title,
    description: eventInfo.desc,
    openGraph: {
      title: eventInfo.title,
      description: eventInfo.desc,
      type: 'article',
      url: ``,
      images: eventInfo.format ? [eventInfo.format] : [],
    },
  };
}
