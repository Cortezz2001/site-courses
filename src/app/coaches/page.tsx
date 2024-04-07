import { Coaches } from "@/screens/coaches/page";
import { CoachesService } from "@/service/coachesService/service";
import { ICoachCardInfo } from "@/service/coachesService/types";
import "semantic-ui-css/semantic.min.css";

export default async function Home() {
    const coaches_ = await CoachesService.getCoaches();
    return <Coaches coachesInfo={coaches_} />;
}
