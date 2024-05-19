import { CourseCard } from "@/modules/courseCard/courseCard";
import { ICourseCardInfoGroup } from "@/service/coursesService/types";
import { Button, Grid, GridColumn, GridRow } from "@/UI/SUI";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

export const GroupCoursesCards: React.FC<ICourseCardInfoGroup> = ({
    coursesInfo,
}) => {
    const groupedCourses = [];
    for (let i = 0; i < coursesInfo.length; i += 4) {
        groupedCourses.push(coursesInfo.slice(i, i + 4));
    }
    const locale = useLocale();
    return (
        <>
            {groupedCourses.length === 0 ? (
                <p>Результаты не найдены</p>
            ) : (
                groupedCourses.map((group, index) => (
                    <Grid key={index} columns={4}>
                        <GridRow>
                            {group.map((course) => (
                                <GridColumn key={course.id}>
                                    <Link
                                        href={`/${locale}/courses/${course.id}`}
                                    >
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
                ))
            )}
        </>
    );
};
