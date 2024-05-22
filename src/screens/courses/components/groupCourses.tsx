import { CourseCard } from "@/modules/courseCard/courseCard";
import { ICourseCardInfoGroup } from "@/service/coursesService/types";
import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import style from "../style.module.css";

export const GroupCoursesCards: React.FC<ICourseCardInfoGroup> = ({
    coursesInfo,
}) => {
    const t = useTranslations("CoursesPage");
    const locale = useLocale();
    return (
        <>
            {coursesInfo.length === 0 ? (
                <p>{t("searchEmpty")}</p>
            ) : (
                <Grid doubling columns={4}>
                    <GridRow className={style.card_container}>
                        {coursesInfo.map((course) => (
                            <GridColumn key={course.id}>
                                <Link href={`/${locale}/courses/${course.id}`}>
                                    <CourseCard
                                        image={course.img}
                                        header={course.title}
                                        description={course.price + " тг"}
                                        program={course.bid}
                                    />
                                </Link>
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
            )}
        </>
    );
};
