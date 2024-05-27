import Link from "next/link";
import {
    Button,
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    List,
    ListItem,
    Segment,
    Image,
    Divider,
} from "@/UI/SUI";
import MessageForm from "./components/emailForm/form";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import style from "./style.module.css";
export default function Footer() {
    const locale = useLocale();
    const t = useTranslations("Footer");
    return (
        <Container name="footer" fluid>
            <Segment vertical className={style.footer_container}>
                <Container className={style.footer_content_wrapper}>
                    <Grid divided inverted stackable>
                        <GridRow className={style.footer_top}>
                            <GridColumn width={4} textAlign="center">
                                <Link href="/">
                                    <Image
                                        src="/logo.png"
                                        size="tiny"
                                        alt=""
                                        style={{
                                            display: "block",
                                            margin: "0 auto 10px",
                                            boxShadow: "0px 0px 3px 1px white",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </Link>
                                <Button
                                    circular
                                    inverted
                                    icon="telegram plane"
                                    href="https://t.me/+b8klQ4VDBX82Y2Iy"
                                    target="_blank"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="whatsapp"
                                    href="https://wa.me/+77051400124"
                                    target="_blank"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="instagram"
                                    href="https://www.instagram.com/lion.it_school?igsh=MXRhZm12cHB3cGY0cg%3D%3D&utm_source=qr"
                                    target="_blank"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="youtube"
                                    href="https://www.youtube.com/@lionITschool"
                                    target="_blank"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="tumblr"
                                    href="https://www.tiktok.com/@lionithub?_t=8lMDavWSGDW&_r=1"
                                    target="_blank"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="facebook"
                                    href=""
                                    target="_blank"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="twitter"
                                    href=""
                                    target="_blank"
                                ></Button>
                                <Button
                                    circular
                                    inverted
                                    icon="mail"
                                    href="mailto:lion.hub@mail.ru"
                                    target="_blank"
                                    className={style.footer_mail_button}
                                ></Button>
                                <p
                                    style={{
                                        textAlign: "center",
                                        paddingTop: "20px",
                                        color: "white",
                                    }}
                                >
                                    {t("address")}
                                </p>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                className={style.footer_nav_mobile}
                            >
                                <List
                                    link
                                    inverted
                                    style={{ textAlign: "center" }}
                                >
                                    <ListItem>
                                        <Link href={`/${locale}/about-school`}>
                                            {t("aboutOurSchool")}
                                        </Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href={`/${locale}/events`}>
                                            {t("events")}
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/help`}>
                                            {t("answersAndQuestions")}
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/courses`}>
                                            {t("courses")}
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/coaches`}>
                                            {t("coaches")}
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/intensives`}>
                                            {t("intensives")}
                                        </Link>
                                    </ListItem>
                                </List>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                style={{ paddingLeft: "20px" }}
                                className={style.footer_nav_desktop}
                            >
                                <List
                                    link
                                    inverted
                                    style={{ textAlign: "center" }}
                                >
                                    <ListItem>
                                        <Link href={`/${locale}/about-school`}>
                                            {t("aboutOurSchool")}
                                        </Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href={`/${locale}/events`}>
                                            {t("events")}
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/help`}>
                                            {t("answersAndQuestions")}
                                        </Link>
                                    </ListItem>
                                </List>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                style={{ paddingLeft: "20px" }}
                                className={style.footer_nav_desktop}
                            >
                                <List
                                    link
                                    inverted
                                    style={{ textAlign: "center" }}
                                >
                                    <ListItem>
                                        <Link href={`/${locale}/courses`}>
                                            {t("courses")}
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/coaches`}>
                                            {t("coaches")}
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/intensives`}>
                                            {t("intensives")}
                                        </Link>
                                    </ListItem>
                                </List>
                            </GridColumn>
                            <GridColumn width={4} className={style.footer_form}>
                                <MessageForm />
                            </GridColumn>
                        </GridRow>
                        <Divider inverted className={style.footer_divider} />
                        <GridRow
                            columns={3}
                            textAlign="center"
                            className={style.footer_bottom}
                        >
                            <GridColumn className={style.footer_bottom_left}>
                                <Header
                                    inverted
                                    as={"p"}
                                    className={`${style.footer_bottom_text} ${style.footer_bottom_copyright}`}
                                >
                                    © LION IT-SCHOOL, 2023-2024
                                </Header>
                            </GridColumn>
                            <GridColumn className={style.footer_bottom_center}>
                                <Header
                                    inverted
                                    as={"a"}
                                    href="/"
                                    className={style.footer_bottom_text}
                                >
                                    {t("termsOfUse")}
                                </Header>
                            </GridColumn>
                            <GridColumn className={style.footer_bottom_right}>
                                <Header
                                    inverted
                                    as={"a"}
                                    href="/"
                                    className={style.footer_bottom_text}
                                >
                                    {t("contractOffer")}
                                </Header>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </Segment>
        </Container>
    );
}
