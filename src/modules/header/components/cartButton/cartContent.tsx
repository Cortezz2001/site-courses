import { Button, Grid, GridRow, Header, GridColumn, Container } from "@/UI/SUI";
import { ISelectedCoursesInfoGroup } from "@/service/cartService/types";
import CourseList from "./coursesList";

const CartContent: React.FC<ISelectedCoursesInfoGroup> = ({
    selectedCourses,
}) => {
    const totalPrice = selectedCourses // Подсчет суммы для оплаты из selectedCourses
        ? selectedCourses.reduce(
              (acc, course) => acc + parseFloat(course.price),
              0
          )
        : 0;

    return (
        <Container
            style={{
                padding: "15px",
                paddingBottom: "15px",
                width: "400px",
                margin: "0 auto",
            }}
        >
            <Header as="h3" style={{ marginBottom: "25px" }}>
                Выбранные курсы:
            </Header>

            {!selectedCourses ? (
                <Grid>
                    <GridRow>
                        <GridColumn width={16} textAlign="center">
                            <p>Корзина пуста </p>
                        </GridColumn>
                    </GridRow>
                </Grid>
            ) : (
                <CourseList selectedCourses={selectedCourses} />
            )}

            <Container
                style={{
                    marginTop: "20px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "10px",
                    justifyContent: "center",
                }}
            >
                <Header
                    as="h4"
                    textAlign="left"
                    style={{ margin: "10px", marginLeft: "0" }}
                >
                    Сумма к оплате:
                </Header>
                <Header
                    as="h4"
                    textAlign="right"
                    style={{ margin: "15px", marginRight: "0" }}
                >
                    {totalPrice} тг
                </Header>
            </Container>
            <Button
                color="blue"
                fluid
                content="Перейти к оплате"
                style={{ backgroundColor: "#007397", color: "white" }}
            />
        </Container>
    );
};

export default CartContent;
