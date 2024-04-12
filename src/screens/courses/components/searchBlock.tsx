"use client";
import { Input } from "@/UI/SUI";
import React, { useState } from "react";

export const SearchBlock: React.FC<{ onSearch: (query: string) => void }> = ({
    onSearch,
}) => {
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
            placeholder="Поиск..."
            style={{
                marginBottom: "30px",
            }}
        />
    );
};
