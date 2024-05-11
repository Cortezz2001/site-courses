import { CoachDetailsPage } from "@/screens/coachPage/page";
import { CoachDetailPageService } from "@/service/coachDetailPageService/service";
import { ICoachDetailPageInfo } from "@/service/coachDetailPageService/types";
import { Metadata } from "next";
import "semantic-ui-css/semantic.min.css";

export const metadata: Metadata = {
    title: "",
    description: "",
    keywords: [],
};

export default async function Home({ params }: { params: { id: number } }) {
    const coachInfo = await CoachDetailPageService.getCoaches(params.id);

    metadata.title = coachInfo.name;
    metadata.description = coachInfo.desc;
    metadata.keywords = [coachInfo.name, coachInfo.role];

    return <CoachDetailsPage coachInfo={coachInfo} />;
}
