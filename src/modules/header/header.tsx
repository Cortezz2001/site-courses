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
import ProfileButton from "./components/profileButton/button";
import CartButton from "./components/cartButton/button";
import { ISelectedCoursesInfoGroup } from "@/service/cartService/types";
import { SelectedCoursesInfoService } from "@/service/cartService/service";
import React from "react";
import style from "./style.module.css";

const Header: React.FC = () => {
    const [data, setData] = useState<ISelectedCoursesInfoGroup | null>(null);
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

    React.useEffect(() => {
        SelectedCoursesInfoService.getSelectedCourses().then((res) =>
            setData(res)
        );
    }, []);

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
                marginRight: "0 !important",
                marginLeft: "0 !important",
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
                    margin: "0 !important",
                    width: "auto",
                }}
            >
                <Container className={style.header_content_wrapper}>
                    <MenuItem
                        name="logo"
                        style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            marginRight: "auto",
                        }}
                    >
                        <Link className={style.page_header_logo_image} href="/">
                            <picture>
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="/logo.png"
                                />
                                <Image
                                    src="/logo_with_title.png"
                                    size="small"
                                    alt="Lion-IT School"
                                />
                            </picture>
                        </Link>
                    </MenuItem>
                    <MenuItem className={style.page_header_support_mobile}>
                        <Link
                            href="tel:+77051400124"
                            className={style.page_header_support}
                        >
                            <Button
                                icon="phone"
                                className={style.page_header_support_button}
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem
                        position="right"
                        className={style.page_header_support_desktop}
                    >
                        <Link href="tel:+77051400124">+77051400124</Link>
                    </MenuItem>
                    <MenuItem
                        style={{ paddingRight: "10px" }}
                        className={style.page_header_locale}
                    >
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
                    <MenuItem
                        style={{ paddingLeft: "10px" }}
                        className={style.page_header_currency}
                    >
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
                        <ProfileButton />
                    </MenuItem>
                </Container>
            </Menu>
            <Menu
                name="navbar"
                attached="bottom"
                borderless
                style={{
                    margin: "0 !important",
                    width: "auto",
                }}
            >
                <Container className={style.navbar_container}>
                    <Dropdown icon="sidebar" className={style.navbar_mobile}>
                        <DropdownMenu>
                            <DropdownItem name="intensive">
                                <Link
                                    href="/intensives"
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    Летние интенсивы 2024
                                </Link>
                            </DropdownItem>
                            <DropdownItem name="trainers">
                                <Link
                                    href="/coaches"
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    Наши тренеры
                                </Link>
                            </DropdownItem>
                            <Dropdown text="Обучающимся" className="link item">
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
                                        <DropdownItem>
                                            Вопросы и ответы
                                        </DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown text="О нас" className="link item">
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
                                        <DropdownItem>
                                            О нашей школе
                                        </DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </Dropdown>
                        </DropdownMenu>
                    </Dropdown>
                    <MenuItem
                        name="intensive"
                        className={style.navbar_item_desktop}
                        style={{ paddingLeft: "0" }}
                    >
                        <Link
                            href="/intensives"
                            style={{
                                color: "inherit",
                            }}
                        >
                            Летние интенсивы 2024
                        </Link>
                    </MenuItem>

                    <MenuItem
                        name="trainers"
                        className={style.navbar_item_desktop}
                    >
                        <Link
                            href="/coaches"
                            style={{
                                color: "inherit",
                            }}
                        >
                            Наши тренеры
                        </Link>
                    </MenuItem>

                    <Dropdown
                        text="Обучающимся"
                        className={`${style.navbar_item_desktop} link item`}
                        pointing
                    >
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

                    <Dropdown
                        text="О нас"
                        className={`${style.navbar_item_desktop} link item`}
                        pointing
                    >
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

                    <MenuItem
                        position="right"
                        className={style.bottom_navbar_menu_item}
                    >
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
                    <MenuItem className={style.bottom_navbar_menu_item}>
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
                    <MenuItem className={style.bottom_navbar_menu_item}>
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
                    <MenuItem className={style.bottom_navbar_menu_item}>
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
                    <MenuItem className={style.bottom_navbar_menu_item}>
                        <Button
                            style={{
                                padding: "8px",
                                margin: "-12px",
                                backgroundColor: "#007397",
                            }}
                            className={style.page_header_cart_button}
                            color="black"
                            circular
                            icon="mail"
                            href="mailto:lion.hub@mail.ru"
                            target="_blank"
                        />
                    </MenuItem>
                    <MenuItem
                        style={{ paddingRight: "0" }}
                        className={style.bottom_navbar_menu_item}
                    >
                        <CartButton
                            selectedCourses={data ? data.selectedCourses : []}
                        />
                    </MenuItem>
                </Container>
            </Menu>
        </Container>
    );
};
export default Header;
