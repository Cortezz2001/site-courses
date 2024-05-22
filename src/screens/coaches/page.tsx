"use client";
import { Layout } from "@/layouts/layout";
import { Header } from "@/UI/SUI";
import { GroupCoachesCards } from "./components/groupCoaches";
import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { CoachesService } from "@/service/coachesService/service";
import React from "react";
import { LANGUAGES } from "@/service/consts";
import { useLocale, useTranslations } from "next-intl";

export const Coaches: React.FC<ICoachCardInfoGroup> = (coachesInfo) => {
    const t = useTranslations();
    const locale = useLocale();
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: t("Breadcrumb.main"),
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Coaches",
            content: t("Breadcrumb.ourCoaches"),
            isLink: true,
            isActive: true,
            url: `/${locale}/coaches`,
        },
    ];
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    {t("CoachesPage.title")}
                </Header>

                <GroupCoachesCards coachesInfo={coachesInfo.coachesInfo} />
            </>
        </Layout>
    );
};
