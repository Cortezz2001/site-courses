import { CoachDetailsPage } from "@/screens/coachPage/page";
import { CoachDetailPageService } from "@/service/coachDetailPageService/service";
import { ICoachDetailPageInfo } from "@/service/coachDetailPageService/types";
import { LANGUAGES } from "@/service/consts";
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
  const coachInfo: ICoachDetailPageInfo = await CoachDetailPageService.getCoaches(params.id, language);

  return <CoachDetailsPage coachInfo={coachInfo} />;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const cookieStore = cookies();
  const languageCookie = cookieStore.get("NEXT_LOCALE");
  const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
  const coachInfo: ICoachDetailPageInfo = await CoachDetailPageService.getCoaches(params.id, language);

  return {
    title: coachInfo.name,
    description: coachInfo.desc,
    openGraph: {
      title: coachInfo.name,
      description: coachInfo.desc,
      type: 'profile',
      url: ``,
    },
  };
}
