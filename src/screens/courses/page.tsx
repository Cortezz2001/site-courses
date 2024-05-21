"use client";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { CourseCard } from "@/modules/courseCard/courseCard";
import { Container, Header } from "@/UI/SUI";
import { GroupCoursesCards } from "./components/groupCourses";
import { ICourseCardInfoGroup } from "@/service/coursesService/types";
import InfoBlock from "./components/infoBlock";
import { Suspense, useState } from "react";
import { SearchBlock } from "./components/searchBlock";
import { useLocale, useTranslations } from "next-intl";


export const Courses: React.FC<ICourseCardInfoGroup> = ({ coursesInfo }) => {
    const t = useTranslations();
    const locale = useLocale();
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: t('Breadcrumb.main'),
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Courses",
            content: t('Breadcrumb.courses'),
            isLink: true,
            isActive: true,
            url: `/${locale}/courses`,
        },
    ];
    const [filteredCourses, setFilteredCourses] = useState(coursesInfo);

    const handleSearch = (query: string) => {
        const filtered = coursesInfo.filter((course) =>
            course.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCourses(filtered);
    };

    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    {t('CoursesPage.title')}
                </Header>
                <SearchBlock onSearch={handleSearch} />
                <GroupCoursesCards coursesInfo={filteredCourses} />
                <InfoBlock />
            </>
        </Layout>
    );
};
