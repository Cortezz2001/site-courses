"use client"
import React from "react";
import { Breadcrumb, BreadcrumbDivider, BreadcrumbSection } from "@/UI/SUI";
import { IBreadCrumb } from "./type";

interface BreadcrumbProps {
    sections: Array<IBreadCrumb>
}

export const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({
    sections
}) => {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            {sections.map(section => (
                <Breadcrumb>
                    <BreadcrumbSection
                        link={section.isActive?false:section.isLink}
                        href={section.isActive?undefined:section.url}
                        style={{ color: section.isActive ? "#1b1c1d" : "#007397" }}
                        active={section.isActive}
                    >
                        {section.content}
                    </BreadcrumbSection>
                    {section.isActive ? null : <BreadcrumbDivider icon='right angle'/>}
                </Breadcrumb>
            ))}
        </div>
    )
}




// Пример использования BreadcrumbComponent

// import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
// const BreadcrumbProps = [
//     { key: "Home", content: "Главная", link: true },
//     { key: "Coaches", content: "Наши тренеры", active: true },
// ];
// <BreadcrumbComponent sections={BreadcrumbProps} />
