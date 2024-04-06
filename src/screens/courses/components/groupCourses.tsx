import { CourseCard } from "@/modules/courseCard/courseCard";
import { ICourseCardInfoGroup } from "@/service/coursesService/types";
import { Button, Grid, GridColumn, GridRow } from "@/UI/SUI";
import Image from "next/image";

export const GroupCoursesCards: React.FC<ICourseCardInfoGroup> = ({
    coursesInfo,
}) => {
    const groupedCourses = [];
    for (let i = 0; i < coursesInfo.length; i += 4) {
        groupedCourses.push(coursesInfo.slice(i, i + 4));
    }

    return (
        <>
            {groupedCourses.map((group, index) => (
                <Grid key={index} columns={4}>
                    <GridRow>
                        {group.map((course) => (
                            <GridColumn key={course.id}>
                                <CourseCard
                                    image={course.img}
                                    header={course.title}
                                    description={"Цена: " + course.price}
                                />
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
            ))}
        </>
    );
};
