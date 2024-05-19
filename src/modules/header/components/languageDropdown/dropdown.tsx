"use client";

import {
    Dropdown,
    DropdownProps,
} from "@/UI/SUI";
import { LANGUAGES } from "@/service/consts";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import setLanguage from 'next-translate/setLanguage';
const LanguageDropdown = () => {
    const router = useRouter()
    const [language, setLanguageState] = useState<string>(() => {
        const savedLanguage = JSON.parse(localStorage?.getItem("language")!);
        return savedLanguage !== null ? savedLanguage : "RU";

    });
    useLayoutEffect(() => {
        try {
            const savedLanguage = JSON.parse(localStorage.getItem("language")!);
            if (savedLanguage !== null) {
                setLanguageState(savedLanguage);
                document.cookie = "language=" + savedLanguage
                async () => await setLanguage(savedLanguage)
            } else {
                localStorage.setItem("language", JSON.stringify(LANGUAGES.RU));
                setLanguageState(LANGUAGES.RU);
                document.cookie = "language=" + "ru"
                async () => await setLanguage('ru')
            }
        } catch (error) {

        }
    }, []);

    const languageOptions = [
        { key: "ru", text: "RU", value: "ru", flag: "ru" },
        { key: "kz", text: "KZ", value: "kk", flag: "kz" },
        { key: "en", text: "EN", value: "en", flag: "us" },
    ];

    const handleLanguageChange = (
        e: React.SyntheticEvent<HTMLElement>,
        { value }: DropdownProps
    ) => {
        setLanguageState(value as string);
        localStorage.setItem("language", JSON.stringify(value));
        document.cookie = "language=" + value
        localStorage.setItem("lang", value as string)
        const currentURL = window.location.pathname;
        if (value === "kk") {
            router.push(currentURL + "?lang=kz")
        }
        else {
            router.push(currentURL + "?lang=" + value)
        }
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
            defaultValue={language}
            inline
            options={languageOptions}
            value={language}
            onChange={handleLanguageChange}
        />
    );
};
export default LanguageDropdown;
