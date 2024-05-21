import { CourseDetailsPage } from "@/screens/coursePage/page";
import { LANGUAGES } from "@/service/consts";
import { CourseDetailPageService } from "@/service/courseDetailPageService/service";
import { ICourseDetailPageInfo } from "@/service/courseDetailPageService/types";
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
  const courseInfo: ICourseDetailPageInfo = await CourseDetailPageService.getCourses(params.id, language);

  return <CourseDetailsPage courseInfo={courseInfo} />;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const cookieStore = cookies();
  const languageCookie = cookieStore.get("NEXT_LOCALE");
  const language: LANGUAGES = languageCookie ? languageCookie.value as LANGUAGES : LANGUAGES.RU;
  const courseInfo: ICourseDetailPageInfo = await CourseDetailPageService.getCourses(params.id, language);

  return {
    title: courseInfo.title,
    description: courseInfo.desc,
    openGraph: {
      title: courseInfo.title,
      description: courseInfo.desc,
      type: 'article',
      url: ``,
      images: courseInfo.format ? [courseInfo.format] : [],
    },
  };
}
