"use client";
import Link from "next/link";
import {
    Container,
    Menu,
    MenuItem,
    Image,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Button,
    Icon,
} from "@/UI/SUI";
import { useState } from "react";

const Header = () => {
    const [language, setLanguage] = useState("RU");
    const [currency, setCurrency] = useState("KZT");

    const languageOptions = [
        { key: "RU", text: "RU", value: "RU", flag: "ru" },
        { key: "KZ", text: "KZ", value: "KZ", flag: "kz" },
        { key: "EN", text: "EN", value: "EN", flag: "us" },
    ];

    const currencyOptions = [
        { key: "KZT", text: "KZT", value: "KZT" },
        { key: "RUB", text: "RUB", value: "RUB" },
        { key: "USD", text: "USD", value: "USD" },
    ];
    const handleLanguageChange = (data: any) => {
        setLanguage(data.value as string);
    };

    const handleCurrencyChange = (data: any) => {
        setCurrency(data.value as string);
    };

    return (
        <Container
            name="header"
            fluid
            style=
            {{ 
                position: "sticky", 
                top: "0", 
                zIndex: "1000"
            }}
        >
            <Menu name="mainheader" borderless attached="top" inverted style={{ borderRadius: 0}}>
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <MenuItem position="left" name="logo">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                size="mini"
                                alt=""
                                style={{
                                    transform: "scale(1.5)",
                                    marginLeft: "20px",
                                }}
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem position="right">+77051400124</MenuItem>
                    <MenuItem style={{ paddingRight: "10px" }}>
                        <Dropdown
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "10px",
                                margin: "auto",
                            }}
                            inline
                            options={languageOptions}
                            value={language}
                            onChange={handleLanguageChange}
                        />
                    </MenuItem>
                    <MenuItem style={{ paddingLeft: "10px" }}>
                        <Dropdown
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "10px",
                                margin: "auto",
                            }}
                            inline
                            options={currencyOptions}
                            value={currency}
                            onChange={handleCurrencyChange}
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            color="black"
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "10px 20px",
                                margin: "auto",
                            }}
                        >
                            Личный кабинет
                        </Button>
                    </MenuItem>
                </Container>
            </Menu>
            <Menu name="navbar" attached="bottom" borderless>
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <MenuItem name="intensive">
                        <Link
                            href="/"
                            style={{
                                color: "inherit",
                            }}
                        >
                            Летние интенсивы 2024
                        </Link>
                    </MenuItem>

                    <MenuItem name="trainers">
                        <Link
                            href="/coaches"
                            style={{
                                color: "inherit",
                            }}
                        >
                            Наши тренеры
                        </Link>
                    </MenuItem>

                    <Dropdown text="Обучающимся" pointing className="link item">
                        <DropdownMenu>
                            <DropdownItem>
                                <Link
                                    href="/"
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    Выбор курса
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link
                                    href="/"
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    Вопросы и ответы
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown text="О нас" pointing className="link item">
                        <DropdownMenu>
                            <DropdownItem>
                                <Link
                                    href="/"
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    Анонсы
                                </Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link
                                    href="/"
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    О нашей школе
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <MenuItem position="right">
                        <Button
                            style={{ padding: "8px", margin: "-12px" }}
                            color="black"
                            circular
                            icon="telegram plane"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            style={{ padding: "8px", margin: "-12px" }}
                            color="black"
                            circular
                            icon="vk"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            style={{ padding: "8px", margin: "-12px" }}
                            color="black"
                            circular
                            icon="youtube"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            color="black"
                            circular
                            icon
                            labelPosition="left"
                            style={{ marginLeft: "20px" }}
                        >
                            <Icon name="cart" style={{ padding: "10px" }} />
                            Корзина
                        </Button>
                    </MenuItem>
                </Container>
            </Menu>
        </Container>
    );
};
export default Header;
