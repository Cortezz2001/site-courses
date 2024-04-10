"use client";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import {
    Accordion,
    AccordionContent,
    AccordionTitle,
    Container,
    Header,
    Icon,
} from "@/UI/SUI";
import { useState } from "react";
import MyAccordion from "./components/Accordion";

export default function Help() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: "Главная",
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "help",
            content: "Вопросы и ответы",
            isLink: true,
            isActive: true,
            url: "/help",
        },
    ];
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    Вопросы и ответы
                </Header>
                <MyAccordion
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                />
            </>
        </Layout>
    );
}
