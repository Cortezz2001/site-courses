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
            style={{
                position: "sticky",
                top: "0",
                zIndex: "1000",
            }}
        >
            <Menu
                name="mainheader"
                borderless
                attached="top"
                inverted
                style={{
                    borderRadius: 0,
                    backgroundColor: "#007397",
                }}
            >
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <MenuItem
                        position="left"
                        name="logo"
                        style={{ paddingLeft: "7px" }}
                    >
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                size="mini"
                                alt=""
                                style={{
                                    transform: "scale(1.5)",
                                    boxShadow: "0px 0px 3px 1px white",
                                    borderRadius: "50%",
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
                                backgroundColor: "white",
                                color: "#007397",
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
                                backgroundColor: "white",
                                color: "#007397",
                            }}
                            inline
                            options={currencyOptions}
                            value={currency}
                            onChange={handleCurrencyChange}
                        />
                    </MenuItem>
                    <MenuItem style={{ paddingRight: "0" }}>
                        <Button
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                padding: "10px 20px",
                                margin: "auto",
                                backgroundColor: "white",
                                color: "#007397",
                            }}
                            href="/auth"
                        >
                            Личный кабинет
                        </Button>
                    </MenuItem>
                </Container>
            </Menu>
            <Menu name="navbar" attached="bottom" borderless>
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <MenuItem name="intensive" style={{ paddingLeft: "0" }}>
                        <Link
                            href="/intensives"
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
                            <Link
                                href="/courses"
                                style={{
                                    color: "inherit",
                                }}
                            >
                                <DropdownItem>Выбор курса</DropdownItem>
                            </Link>
                            <Link
                                href="/help"
                                style={{
                                    color: "inherit",
                                }}
                            >
                                <DropdownItem>Вопросы и ответы</DropdownItem>
                            </Link>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown text="О нас" pointing className="link item">
                        <DropdownMenu>
                            <Link
                                href="/events"
                                style={{
                                    color: "inherit",
                                }}
                            >
                                <DropdownItem>Анонсы</DropdownItem>
                            </Link>
                            <Link
                                href="/about-school"
                                style={{
                                    color: "inherit",
                                }}
                            >
                                <DropdownItem>О нашей школе</DropdownItem>
                            </Link>
                        </DropdownMenu>
                    </Dropdown>

                    <MenuItem position="right">
                        <Button
                            style={{
                                padding: "8px",
                                margin: "-12px",
                                backgroundColor: "#007397",
                            }}
                            color="black"
                            circular
                            icon="telegram plane"
                            href="https://t.me/+b8klQ4VDBX82Y2Iy"
                            target="_blank"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            style={{
                                padding: "8px",
                                margin: "-12px",
                                backgroundColor: "#007397",
                            }}
                            color="black"
                            circular
                            icon="whatsapp"
                            href="https://wa.me/+77051400124"
                            target="_blank"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            style={{
                                padding: "8px",
                                margin: "-12px",
                                backgroundColor: "#007397",
                            }}
                            color="black"
                            circular
                            icon="facebook"
                            href=""
                            target="_blank"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            style={{
                                padding: "8px",
                                margin: "-12px",
                                backgroundColor: "#007397",
                            }}
                            color="black"
                            circular
                            icon="twitter"
                            href=""
                            target="_blank"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            style={{
                                padding: "8px",
                                margin: "-12px",
                                backgroundColor: "#007397",
                            }}
                            color="black"
                            circular
                            icon="mail"
                            href="mailto:lion.hub@mail.ru"
                            target="_blank"
                        />
                    </MenuItem>
                    <MenuItem style={{ paddingRight: "0" }}>
                        <Button
                            color="black"
                            circular
                            icon
                            labelPosition="left"
                            style={{
                                marginLeft: "20px",
                                backgroundColor: "#007397",
                                color: "white",
                            }}
                        >
                            <Icon
                                name="cart"
                                style={{
                                    padding: "10px",
                                }}
                            />
                            Корзина
                        </Button>
                    </MenuItem>
                </Container>
            </Menu>
        </Container>
    );
};
export default Header;
