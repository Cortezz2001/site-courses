import { Main } from "@/screens/main/page";
import { CoachesService } from "@/service/coachesService/service";
import "semantic-ui-css/semantic.min.css";

export default async function Home() {
    const coaches_ = await CoachesService.getCoaches();

    return <Main coachesInfo={coaches_} />;
}
