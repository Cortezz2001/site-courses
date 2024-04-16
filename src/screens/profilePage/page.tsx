"use client";

import { useState, useEffect } from "react";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { TabPane, Tab } from "@/UI/SUI";

interface TabContent {
    menuItem: string;
    render: () => JSX.Element;
}

export const Profile = () => {
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: "Главная",
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Profile",
            content: "Профиль",
            isLink: true,
            isActive: true,
            url: "",
        },
    ];

    const [tabContent, setTabContent] = useState<TabContent[]>([]);

    useEffect(() => {
        setTabContent([
            {
                menuItem: "Профиль",
                render: () => <TabPane as="div">Профиль</TabPane>,
            },
            {
                menuItem: "Заказы",
                render: () => <TabPane as="div">Заказы</TabPane>,
            },
            {
                menuItem: "Настройки",
                render: () => <TabPane as="div">Настройки</TabPane>,
            },
        ]);
    }, []);

    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Tab
                    menu={{ fluid: true, vertical: true }}
                    menuPosition="left"
                    panes={tabContent}
                    style={{ marginTop: "30px" }}
                />
            </>
        </Layout>
    );
};
