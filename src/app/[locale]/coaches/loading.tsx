import {
    Container,
    Loader,
} from "@/UI/SUI";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { useTranslations } from "next-intl";

export default function Loading() {
    const t = useTranslations("Breadcrumb");
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: t('main'),
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Coaches",
            content: t('ourCoaches'),
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

    );
}
