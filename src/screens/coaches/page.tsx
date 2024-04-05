import { Layout } from "@/layouts/layout";
import { Container, Header } from "@/UI/SUI";
import { GroupCoachesCards } from "./components/groupCoaches/groupCoaches";
import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";


const BreadcrumbProps: Array<IBreadCrumb> = [
        { key: "Home", content: "Главная", isLink: true, isActive: false, url:"/" },
        { key: "Coaches", content: "Наши тренеры", isLink: true, isActive: true, url:"/coaches" },
    ];


export const Coaches: React.FC<ICoachCardInfoGroup> = ({ coachesInfo }) => {
    return (
        <Layout>
            <Container>
                <BreadcrumbComponent sections={BreadcrumbProps}/>
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    Тренеры
                </Header>

                <GroupCoachesCards coachesInfo={coachesInfo} />
            </Container>
        </Layout>
    );
};
