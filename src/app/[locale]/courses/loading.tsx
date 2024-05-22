import { Container, Loader } from "@/UI/SUI";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = {
    params: {locale: string};
  };
export default function Loading({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
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
            key: "Courses",
            content: t('courses'),
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
    );
}
