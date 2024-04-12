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
import Loading from "@/app/courses/loading";
import { SearchBlock } from "./components/searchBlock";

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

export const Courses: React.FC<ICourseCardInfoGroup> = ({ coursesInfo }) => {
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
                    Курсы
                </Header>
                <SearchBlock onSearch={handleSearch} />
                <GroupCoursesCards coursesInfo={filteredCourses} />
                <InfoBlock />
            </>
        </Layout>
    );
};
