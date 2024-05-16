"use client";

import {
    Dropdown,
    DropdownProps,
} from "@/UI/SUI";

import React, { useEffect, useState } from "react";

const LanguageDropdown = () => {
    const [language, setLanguage] = useState<string>(() => {
        const savedLanguage = JSON.parse(localStorage.getItem("language")!);
        return savedLanguage !== null ? savedLanguage : "RU";
    
    });
    useEffect(() => {
        try {
          const savedLanguage = JSON.parse(localStorage.getItem("language")!);
          if (savedLanguage !== null) {
            setLanguage(savedLanguage);
          } else {
            localStorage.setItem("language", JSON.stringify("RU")); 
            setLanguage("RU");
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
        setLanguage(value as string);
        localStorage.setItem("language", JSON.stringify(value));
        window.location.reload();

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
        inline
        options={languageOptions}
        value={language}
        onChange={handleLanguageChange}

        />
    );
};
export default LanguageDropdown;
