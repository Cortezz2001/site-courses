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
export default function Footer() {
    const locale = useLocale();
    const t = useTranslations("Footer");
    return (
        <Container name="footer" fluid>
            <Segment
                vertical
                style={{ padding: "5em 0", backgroundColor: "#007397" }}
            >
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <Grid divided inverted stackable>
                        <GridRow>
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
                                <p
                                    style={{
                                        textAlign: "center",
                                        paddingTop: "20px",
                                        color: "white",
                                    }}
                                >
                                    {t('address')}
                                </p>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                style={{ paddingLeft: "20px" }}
                            >
                                <List
                                    link
                                    inverted
                                    style={{ textAlign: "center" }}
                                >
                                    <ListItem>
                                        <Link href={`/${locale}//about-school`}>
                                            {t('aboutOurSchool')}
                                        </Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href={`/${locale}/events`}>{t('events')}</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/help`}>
                                            {t('answersAndQuestions')}
                                        </Link>
                                    </ListItem>
                                </List>
                            </GridColumn>
                            <GridColumn
                                width={4}
                                style={{ paddingLeft: "20px" }}
                            >
                                <List
                                    link
                                    inverted
                                    style={{ textAlign: "center" }}
                                >
                                    <ListItem>
                                        <Link href={`/${locale}/courses`}>{t('courses')}</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/coaches`}>{t('coaches')}</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={`/${locale}/intensives`}>
                                            {t('intensives')}
                                        </Link>
                                    </ListItem>
                                </List>
                            </GridColumn>
                            <GridColumn width={4}>
                                <MessageForm />
                            </GridColumn>
                        </GridRow>
                        <Divider inverted />
                        <GridRow columns={3} textAlign="center">
                            <GridColumn>
                                <Header
                                    inverted
                                    as={"p"}
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                    }}
                                >
                                    © LION IT-SCHOOL, 2023-2024
                                </Header>
                            </GridColumn>
                            <GridColumn>
                                <Header
                                    inverted
                                    as={"a"}
                                    href="/"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                    }}
                                >
                                    {t('termsOfUse')}
                                </Header>
                            </GridColumn>
                            <GridColumn>
                                <Header
                                    inverted
                                    as={"a"}
                                    href="/"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "normal",
                                    }}
                                >
                                    {t('contractOffer')}
                                </Header>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </Segment>
        </Container>
    );
}
