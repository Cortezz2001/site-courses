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
} from "@/UI/SUI";
import { useState } from "react";
import ProfileButton from "./components/profileButton/button";
import CartButton from "./components/cartButton/button";
import { ISelectedCoursesInfoGroup } from "@/service/cartService/types";
import { SelectedCoursesInfoService } from "@/service/cartService/service";
import React from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./components/languageDropdown/localeSwitcher";
import { useLocale } from "next-intl";
const Header: React.FC = () => {
    const [data, setData] = useState<ISelectedCoursesInfoGroup | null>(null);
    const [currency, setCurrency] = useState("KZT");
    const locale = useLocale();
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

    const handleCurrencyChange = (data: any) => {
        setCurrency(data.value as string);
    };
    const t = useTranslations("Header");
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
                        style={{
                            paddingLeft: "0px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                        }}
                    >
                        <Link href="/">
                            <Image
                                src="/logo_with_title.png"
                                size="small"
                                alt=""
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem position="right">+77051400124</MenuItem>
                    <MenuItem style={{ paddingRight: "10px" }}>
                        <LocaleSwitcher />
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
                        <ProfileButton />
                    </MenuItem>
                </Container>
            </Menu>
            <Menu name="navbar" attached="bottom" borderless>
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <MenuItem name="intensive" style={{ paddingLeft: "0" }}>
                        <Link
                            href={`/${locale}/intensives`}
                            style={{
                                color: "inherit",
                            }}
                        >
                            {t("intensives")}
                        </Link>
                    </MenuItem>

                    <MenuItem name="trainers">
                        <Link
                            href={`/${locale}/coaches`}
                            style={{
                                color: "inherit",
                            }}
                        >
                            {t("ourCoaches")}
                        </Link>
                    </MenuItem>

                    <Dropdown
                        text={t("forStudents")}
                        pointing
                        className="link item"
                    >
                        <DropdownMenu>
                            <Link
                                href={`/${locale}/courses`}
                                style={{
                                    color: "inherit",
                                }}
                            >
                                <DropdownItem>{t("courseSelection")}</DropdownItem>
                            </Link>
                            <Link
                                href={`/${locale}/help`}
                                style={{
                                    color: "inherit",
                                }}
                            >
                                <DropdownItem>{t('questionsAndAnswers')}</DropdownItem>
                            </Link>
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown text={t('aboutUs')} pointing className="link item">
                        <DropdownMenu>
                            <Link
                                href={`/${locale}/events`}
                                style={{
                                    color: "inherit",
                                }}
                            >
                                <DropdownItem>{t('events')}</DropdownItem>
                            </Link>
                            <Link
                                href={`/${locale}/about-school`}
                                style={{
                                    color: "inherit",
                                }}
                            >
                                <DropdownItem>{t('aboutSchool')}</DropdownItem>
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
