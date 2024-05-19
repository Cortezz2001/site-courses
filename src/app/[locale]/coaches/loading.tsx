import {
    Container,
    Header,
    Grid,
    GridRow,
    GridColumn,
    Segment,
    Loader,
    Dimmer,
} from "@/UI/SUI";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import CoachCardSkeleton from "@/UI/skeletons/coachCardSkeleton";

export default function Loading() {
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: "Главная",
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Coaches",
            content: "Наши тренеры",
            isLink: true,
            isActive: true,
            url: "/coaches",
        },
    ];

    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Container
                    style={{
                        minHeight: "50vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Loader active size="massive" />
                </Container>
            </>
        </Layout>
        // <Layout>
        //     <>
        //         <BreadcrumbComponent sections={BreadcrumbProps} />
        //         <Header as="h1" style={{ marginBottom: "30px" }}>
        //             Тренеры
        //         </Header>
        //         <Grid columns={4}>
        //             <GridRow>
        //                 {[...Array(4)].map((_, index) => (
        //                     <GridColumn key={index}>
        //                         <CoachCardSkeleton />
        //                     </GridColumn>
        //                 ))}
        //             </GridRow>
        //             <GridRow>
        //                 {[...Array(4)].map((_, index) => (
        //                     <GridColumn key={index}>
        //                         <CoachCardSkeleton />
        //                     </GridColumn>
        //                 ))}
        //             </GridRow>
        //         </Grid>
        //     </>
        // </Layout>
    );
}
