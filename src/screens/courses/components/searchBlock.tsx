"use client";
import { Input } from "@/UI/SUI";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export const SearchBlock: React.FC<{ onSearch: (query: string) => void }> = ({
    onSearch,
}) => {
    const t = useTranslations("CoursesPage");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        onSearch(query);
    };

    return (
        <Input
            fluid
            size="large"
            icon="search"
            type="text"
            onChange={handleSearchChange}
            placeholder={t('searchPlaceholder')}
            style={{
                marginBottom: "30px",
                boxShadow: "0px 0px 5px 1px #e0e0e0",
            }}
        />
    );
};
