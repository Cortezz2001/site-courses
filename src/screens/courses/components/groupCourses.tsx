import { CourseCard } from "@/modules/courseCard/courseCard";
import { ICourseCardInfoGroup } from "@/service/coursesService/types";
import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import Link from "next/link";

import style from "../style.module.css";

export const GroupCoursesCards: React.FC<ICourseCardInfoGroup> = ({
    coursesInfo,
}) => {
    return (
        <>
            {coursesInfo.length === 0 ? (
                <p>Результаты не найдены</p>
            ) : (
                <Grid doubling columns={4}>
                    <GridRow className={style.card_container}>
                        {coursesInfo.map((course) => (
                            <GridColumn key={course.id}>
                                <Link href={`/courses/${course.id}`}>
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
