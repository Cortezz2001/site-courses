import React from "react";
import { Breadcrumb } from "@/UI/SUI";

interface BreadcrumbProps {
    sections: {
        key: string;
        content: string;
        link?: boolean;
        active?: boolean;
    }[];
    icon?: string;
}

export const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({
    sections,
    icon = "right angle",
}) => <Breadcrumb icon={icon} sections={sections} />;

// Пример использования BreadcrumbComponent

// import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
// const BreadcrumbProps = [
//     { key: "Home", content: "Главная", link: true },
//     { key: "Coaches", content: "Наши тренеры", active: true },
// ];
// <BreadcrumbComponent sections={BreadcrumbProps} />
