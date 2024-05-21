import { Button, Grid, GridRow, Header, GridColumn, Container } from "@/UI/SUI";
import { ISelectedCoursesInfoGroup } from "@/service/cartService/types";
import CourseList from "./coursesList";
import { useTranslations } from "next-intl";

const CartContent: React.FC<ISelectedCoursesInfoGroup> = ({
    selectedCourses,
}) => {
    const totalPrice = selectedCourses // Подсчет суммы для оплаты из selectedCourses
        ? selectedCourses.reduce(
              (acc, course) => acc + parseFloat(course.price),
              0
          )
        : 0;
    const t = useTranslations("Cart");
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
                {t('selectedCourses')}
            </Header>

            {!selectedCourses ? (
                <Grid>
                    <GridRow>
                        <GridColumn width={16} textAlign="center">
                            <p>{t('cartIsEmpty')} </p>
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
                    {t('amoutToPay')}
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
                content={t('goToPay')}
                style={{ backgroundColor: "#007397", color: "white" }}
            />
        </Container>
    );
};

export default CartContent;
