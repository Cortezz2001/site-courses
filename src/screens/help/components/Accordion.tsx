"use client";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionTitle,
    Container,
    Icon,
} from "@/UI/SUI";
import { useTranslations } from "next-intl";

interface MyAccordionProps {
    activeIndex: number;
    handleClick: (index: number) => void;
}

export default function MyAccordion({
    activeIndex,
    handleClick,
}: MyAccordionProps) {
    const t = useTranslations("QuestionsAndAnswersPage");
    return (
        <>
            <Accordion
                fluid
                styled
                style={{
                    webkitBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                    mozBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                }}
            >
                <AccordionTitle
                    style={{
                        boxShadow: "0px 1px 10px 0px rgba(34, 60, 80, 0.2)",
                    }}
                    active
                >
                    {t('blockTitle1')}
                </AccordionTitle>
                <AccordionTitle
                    active={activeIndex === 0}
                    index={0}
                    onClick={() => handleClick(0)}
                >
                    <Icon name="dropdown" />
                    {t('Block1.q1')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 0}>
                    <p>
                        {t('Block1.a1')}
                    </p>
                </AccordionContent>

                <AccordionTitle
                    active={activeIndex === 1}
                    index={1}
                    onClick={() => handleClick(1)}
                >
                    <Icon name="dropdown" />
                    {t('Block1.q2')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 1}>
                    <p>
                        {t('Block1.a2')}
                    </p>
                </AccordionContent>

                <AccordionTitle
                    active={activeIndex === 2}
                    index={2}
                    onClick={() => handleClick(2)}
                >
                    <Icon name="dropdown" />
                    {t('Block1.q3')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 2}>
                    <p>
                        {t('Block1.a3')}
                    </p>
                    <p>{t('Block1.a3-1')}</p>
                    <ul style={{ paddingLeft: "20px" }}>
                        <li>
                            {t('Block1.a3-2')}
                        </li>
                        <li>
                            {t('Block1.a3-3')}
                        </li>
                        <li>
                            {t('Block1.a3-4')}
                        </li>
                        <li>
                            {t('Block1.a3-5')}
                        </li>
                        <li>
                            {t('Block1.a3-6')}
                        </li>
                    </ul>
                    <p style={{ paddingTop: "14px" }}>
                        {t('Block1.a3-7')}
                    </p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 3}
                    index={3}
                    onClick={() => handleClick(3)}
                >
                    <Icon name="dropdown" />
                    {t('Block1.q4')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 3}>
                    <p>
                        {t('Block1.a4')}
                    </p>
                </AccordionContent>
            </Accordion>

            <Accordion
                fluid
                styled
                style={{
                    marginTop: "30px",
                    webkitBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                    mozBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                }}
            >
                <AccordionTitle
                    style={{
                        boxShadow: "0px 1px 10px 0px rgba(34, 60, 80, 0.2)",
                    }}
                    active
                >
                    {t('blockTitle2')}
                </AccordionTitle>
                <AccordionTitle
                    active={activeIndex === 4}
                    index={4}
                    onClick={() => handleClick(4)}
                >
                    <Icon name="dropdown" />{t('Block2.q1')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 4}>
                    <p>
                        {t('Block2.a1')}
                    </p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 5}
                    index={5}
                    onClick={() => handleClick(5)}
                >
                    <Icon name="dropdown" />
                    {t('Block2.q2')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 5}>
                    <p>
                        {t('Block2.a2')}
                    </p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 6}
                    index={6}
                    onClick={() => handleClick(6)}
                >
                    <Icon name="dropdown" />
                    {t('Block2.q3')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 6}>
                    <p>
                        {t('Block2.a3')}
                    </p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 7}
                    index={7}
                    onClick={() => handleClick(7)}
                >
                    <Icon name="dropdown" />
                    {t('Block2.q4')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 7}>
                    <p>{t('Block2.a4')}</p>
                </AccordionContent>
                <AccordionTitle
                    active={activeIndex === 8}
                    index={8}
                    onClick={() => handleClick(8)}
                >
                    <Icon name="dropdown" />
                    {t('Block2.q5')}
                </AccordionTitle>
                <AccordionContent active={activeIndex === 8}>
                    <p>
                        {t('Block2.a5')}
                    </p>
                </AccordionContent>
            </Accordion>
        </>
    );
}
