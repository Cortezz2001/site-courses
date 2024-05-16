"use client"
import { Layout } from "@/layouts/layout";
import { Container, Header } from "@/UI/SUI";
import { GroupCoachesCards } from "./components/groupCoaches/groupCoaches";
import { ICoachCardInfo, ICoachCardInfoGroup } from "@/service/coachesService/types";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { CoachesService } from "@/service/coachesService/service";
import React from "react";
import { LANGUAGES } from "@/service/consts";

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

export const Coaches: React.FC<ICoachCardInfoGroup> = (coachesInfo) => {
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    Тренеры
                </Header>

                <GroupCoachesCards coachesInfo={coachesInfo.coachesInfo} />
            </>
        </Layout>
    );
};
