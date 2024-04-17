"use client";

import { useState, useEffect } from "react";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { TabPane, Tab, MenuItem, Label, Icon } from "@/UI/SUI";
import ProfilePane from "./components/profilePane";
import OrdersPane from "./components/ordersPane";

interface TabContent {
    menuItem: JSX.Element;
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
                menuItem: (
                    <MenuItem
                        key="profile"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            gap: "1em",
                        }}
                    >
                        <Icon
                            name="user circle outline"
                            style={{ margin: "0", color: "#007397" }}
                        />
                        Мои данные
                    </MenuItem>
                ),
                render: () => (
                    <TabPane as="div">
                        <ProfilePane />
                    </TabPane>
                ),
            },
            {
                menuItem: (
                    <MenuItem
                        key="orders"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            gap: "1em",
                        }}
                    >
                        <Icon
                            name="check circle outline"
                            style={{ margin: "0", color: "#007397" }}
                        />
                        Заказы
                    </MenuItem>
                ),
                render: () => (
                    <TabPane as="div">
                        <OrdersPane />
                    </TabPane>
                ),
            },
            {
                menuItem: (
                    <MenuItem
                        key="settings"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            gap: "1em",
                        }}
                    >
                        <Icon
                            name="setting"
                            style={{ margin: "0", color: "#007397" }}
                        />
                        Настройки
                    </MenuItem>
                ),
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
