"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Dropdown } from "@/UI/SUI";
import "semantic-ui-css/semantic.min.css";
import { useTransition } from "react";
const locales = ["en", "ru", "kk"];

const languageOptions = [
    { key: "ru", text: "RU", value: "ru", flag: "ru" },
    { key: "kk", text: "KZ", value: "kk", flag: "kz" },
    { key: "en", text: "EN", value: "en", flag: "us" },
];
export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();
    const handleLanguageChange = (event: any, data: any) => {
        const newLocale = data.value;
        startTransition(() => {
            const pathSegments = pathname.split("/").filter(Boolean);
            if (locales.includes(pathSegments[0])) {
                pathSegments[0] = newLocale;
            } else {
                pathSegments.unshift(newLocale);
            }

            const newPath = "/" + pathSegments.join("/");
            router.push(newPath);
        });
    };

    return (
        <Dropdown
            style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                margin: "auto",
                backgroundColor: "white",
                color: "#007397",
            }}
            placeholder={locale}
            inline
            options={languageOptions}
            onChange={handleLanguageChange}
            value={locale}
        />
    );
}
