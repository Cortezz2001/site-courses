import React from "react";
import { Grid, GridRow, GridColumn, Image, Button, Icon } from "@/UI/SUI";
import { ISelectedCoursesInfoGroup } from "@/service/cartService/types";

const CourseList: React.FC<ISelectedCoursesInfoGroup> = ({
    selectedCourses,
}) => (
    <Grid
        columns={4}
        divided="vertically"
        verticalAlign="middle"
        textAlign="center"
    >
        {selectedCourses &&
            selectedCourses.map((course) => (
                <GridRow key={course.id}>
                    <GridColumn width={3} textAlign="left">
                        <Image
                            src="/programmers-stock.png"
                            alt=""
                            size="mini"
                        />
                    </GridColumn>
                    <GridColumn textAlign="left" width={5}>
                        {course.title}
                    </GridColumn>
                    <GridColumn textAlign="center" width={4}>
                        {course.price} тг
                    </GridColumn>
                    <GridColumn textAlign="right">
                        <Button icon color="red">
                            <Icon name="trash" />
                        </Button>
                    </GridColumn>
                </GridRow>
            ))}
    </Grid>
);

export default CourseList;
