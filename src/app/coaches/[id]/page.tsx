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
    const coachInfo_ = await CoachDetailPageService.getCoaches();
    let activePage: ICoachDetailPageInfo = {
        id: 0,
        img: "",
        name: "",
        role: "",
        education: "",
        exp: "",
        desc: "",
        courses: [],
    };
    coachInfo_.forEach((coachinfo) => {
        if (coachinfo.id === Number(params.id)) {
            activePage = coachinfo;
        }
    });

    metadata.title = activePage.name;
    metadata.description = activePage.desc;
    metadata.keywords = [activePage.name, activePage.role];

    return <CoachDetailsPage coachInfo={activePage} />;
}
