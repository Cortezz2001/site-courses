import { Container, Header, Grid, GridRow, GridColumn, Loader } from "@/UI/SUI";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import CourseCardSkeleton from "@/UI/skeletons/courseCardSkeleton";

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
            key: "Courses",
            content: "Курсы",
            isLink: true,
            isActive: true,
            url: "/courses",
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
        //             Курсы
        //         </Header>
        //         <Grid columns={4}>
        //             <GridRow>
        //                 {[...Array(4)].map((_, index) => (
        //                     <GridColumn key={index}>
        //                         <CourseCardSkeleton />
        //                     </GridColumn>
        //                 ))}
        //             </GridRow>
        //             <GridRow>
        //                 {[...Array(4)].map((_, index) => (
        //                     <GridColumn key={index}>
        //                         <CourseCardSkeleton />
        //                     </GridColumn>
        //                 ))}
        //             </GridRow>
        //         </Grid>
        //     </>
        // </Layout>
    );
}
