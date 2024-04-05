import { Layout } from "@/layouts/layout";
import { Container, Header } from "@/UI/SUI";
import { GroupCoachesCards } from "./components/groupCoaches/groupCoaches";
import { ICoachCardInfoGroup } from "@/service/types";


export const Coaches: React.FC<ICoachCardInfoGroup> = ({ coachesInfo }) => {
    return (
        <Layout>
            <Container>

                <Header as="h1" style={{ marginBottom: "30px" }}>
                    Тренеры
                </Header>

                <GroupCoachesCards coachesInfo={coachesInfo} />

            </Container>
        </Layout>
    );
}
