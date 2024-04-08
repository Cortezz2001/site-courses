import { Container, Header, Grid, GridRow, GridColumn } from "@/UI/SUI";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import CourseCardSkeleton from "@/modules/courseCard/courseCardSkeleton";

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
            <Container>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    Курсы
                </Header>
                <Grid columns={4}>
                    <GridRow>
                        {[...Array(4)].map((_, index) => (
                            <GridColumn key={index}></GridColumn>
                        ))}
                    </GridRow>
                    <GridRow>
                        {[...Array(4)].map((_, index) => (
                            <GridColumn key={index}>
                                <CourseCardSkeleton />
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
            </Container>
        </Layout>
    );
}
