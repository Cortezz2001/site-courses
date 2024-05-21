import { ICoachCardInfo } from "@/service/coachesService/types";
import { ICourseCardInfo } from "@/service/coursesService/types";
import { IEventCardInfo } from "@/service/eventsService/types";
import { IBannerInfo } from "@/service/bannersService/types";
import { Layout } from "@/layouts/layout";
import { BannerCarousel } from "./components/bannerCarousel";
import { CoachesCarousel } from "./components/coachesCarousel";
import { CoursesCarousel } from "./components/coursesCarousel";
import { EventsCarousel } from "./components/eventsCarousel";
import InfoBlock from "./components/infoBlock";
import ActionBlock from "./components/actionBlock";
import { Header } from "@/UI/SUI";
import { useTranslations } from "next-intl";

interface MainProps {
    coachesInfo: ICoachCardInfo[];
    coursesInfo: ICourseCardInfo[];
    eventsInfo: IEventCardInfo[];
    bannersInfo: IBannerInfo[];
}

export const Main: React.FC<MainProps> = ({
    coachesInfo,
    coursesInfo,
    eventsInfo,
    bannersInfo,
}) => {
    const t = useTranslations("Main");
    return (
        <Layout>
            <>
                <BannerCarousel bannersInfo={bannersInfo} />
                <Header as="h2">{t('coursesTitle')}</Header>
                <CoursesCarousel coursesInfo={coursesInfo} />
                <Header as="h2">{t('coachesTitle')}</Header>
                <CoachesCarousel coachesInfo={coachesInfo} />
                <ActionBlock />
                <Header as="h2">{t('eventsTitle')}</Header>
                <EventsCarousel eventsInfo={eventsInfo} />
                <InfoBlock />
            </>
        </Layout>
    );
};
