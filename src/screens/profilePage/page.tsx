"use client";

import { useState, useEffect } from "react";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { TabPane, Tab, MenuItem, Icon } from "@/UI/SUI";
import ProfilePane from "./components/profilePane";
import OrdersPane from "./components/ordersPane";
import SettingsPane from "./components/settingsPane";

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
    const [isVertical, setIsVertical] = useState(true);

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
                            flexGrow: "1",
                        }}
                    >
                        <Icon
                            name="setting"
                            style={{ margin: "0", color: "#007397" }}
                        />
                        Настройки
                    </MenuItem>
                ),
                render: () => (
                    <TabPane as="div">
                        <SettingsPane />
                    </TabPane>
                ),
            },
        ]);
    }, []);

    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth < 767) {
                setIsVertical(false);
            } else {
                setIsVertical(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Tab
                    menu={{ fluid: true, vertical: isVertical }}
                    menuPosition="left"
                    panes={tabContent}
                    style={{ marginTop: "30px" }}
                />
            </>
        </Layout>
    );
};
