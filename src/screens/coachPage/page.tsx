import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
import { Layout } from "@/layouts/layout";
import { ICoachDetailPageInfo } from "@/service/coachDetailPageService/types";
import {
    Grid,
    GridColumn,
    GridRow,
    Header,
    Icon,
    Image,
    Label,
    List,
    ListContent,
    ListDescription,
    ListHeader,
    ListItem,
} from "@/UI/SUI";

import style from "./style.module.css";
import { useTranslations, useLocale } from "next-intl";

interface ICoachDetailPageProps {
    coachInfo: ICoachDetailPageInfo;
}

export function CoachDetailsPage({ coachInfo }: ICoachDetailPageProps) {
    const t = useTranslations();
    const locale = useLocale();
    const BreadcrumbProps: Array<IBreadCrumb> = [
        {
            key: "Home",
            content: t("Breadcrumb.main"),
            isLink: true,
            isActive: false,
            url: "/",
        },
        {
            key: "Coaches",
            content: t("Breadcrumb.ourCoaches"),
            isLink: true,
            isActive: false,
            url: `/${locale}/coaches`,
        },
        {
            key: "CoachPage",
            content: coachInfo.name,
            isLink: true,
            isActive: true,
            url: "",
        },
    ];
    return (
        <Layout>
            <>
                <BreadcrumbComponent sections={BreadcrumbProps} />
                <Grid columns={2} divided className={style.coach_profile}>
                    <GridRow className={style.coach_info_container}>
                        <GridColumn
                            width={5}
                            className={style.coach_image_container}
                        >
                            <Label className={style.ribbon} ribbon>
                                {coachInfo.role}
                            </Label>
                            <Image
                                rounded
                                alt={coachInfo.name}
                                src={coachInfo.img}
                                className={style.coach_image}
                            />
                        </GridColumn>
                        <GridColumn className={style.coach_summary}>
                            <Header as="h2">{coachInfo.name}</Header>
                            <p style={{ fontSize: "large" }}>
                                {coachInfo.role} «Lion IT-SCHOOL»
                            </p>
                            <List>
                                <ListItem>
                                    <Icon name="info circle" />
                                    <ListContent>
                                        <ListHeader>
                                            {t("CoachDetailPage.experience")}
                                        </ListHeader>
                                        <ListDescription>
                                            {coachInfo.exp}
                                        </ListDescription>
                                    </ListContent>
                                </ListItem>
                            </List>
                            <div className={style.coach_skills}>
                                <div className={style.coach_skill_education}>
                                    <Header
                                        as="h3"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        {t("CoachDetailPage.education")}
                                    </Header>
                                    <p>{coachInfo.education}</p>
                                </div>
                                <div className={style.coach_skill_awards}>
                                    <Header
                                        as="h3"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        {t("CoachDetailPage.awards")}
                                    </Header>
                                    <p>{coachInfo.desc}</p>
                                </div>
                            </div>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Header as="h2">{t("CoachDetailPage.disciplines")}</Header>
                <Grid
                    columns={3}
                    stackable
                    raised
                    style={{
                        boxShadow: "1px 1px 20px 10px #e0e0e0",
                        borderRadius: "10px",
                        margin: "0",
                        padding: "20px",
                    }}
                >
                    <GridRow
                        style={{
                            rowGap: "15px",
                            fontSize: "large",
                        }}
                    >
                        {coachInfo.courses.map((course) => (
                            <GridColumn
                                key={course.id}
                                style={{ display: "flex", gap: "10px" }}
                            >
                                <Icon
                                    name="graduation cap"
                                    style={{ color: "#007397" }}
                                />
                                <p>{course.title}</p>
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
            </>
        </Layout>
    );
}
