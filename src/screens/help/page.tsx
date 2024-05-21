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
import { useLocale, useTranslations } from "next-intl";

export default function Help() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };
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
            key: "help",
            content: t('Breadcrumb.questionsAndAnswers'),
            isLink: true,
            isActive: true,
            url: `/${locale}/help`,
        },
    ];
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Header as="h2" style={{ marginBottom: "30px" }}>
                    {t('QuestionsAndAnswersPage.title')}
                </Header>
                <MyAccordion
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                />
            </>
        </Layout>
    );
}
