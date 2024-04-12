import { Container, Header, Grid, GridRow, GridColumn, Loader } from "@/UI/SUI";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import CourseCardSkeleton from "@/UI/skeletons/courseCardSkeleton";

export default function Loading() {
    return (
        <Layout>
            <>
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
    );
}
