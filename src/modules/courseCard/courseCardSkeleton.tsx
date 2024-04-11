import { Card, CardContent, Container, Image } from "@/UI/SUI";
import style from "@/modules/courseCard/style.module.css";
const CourseCardSkeleton = () => {
    return (
        <Card
            className={style.shimmer}
            style={{
                height: "100%",
                width: "auto",
            }}
        >
            <Container
                style={{
                    backgroundColor: "#e0e0e0",
                    width: "100%",
                    height: "250px",
                }}
            />
            <CardContent
                style={{
                    paddingTop: "15px",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "repeat(3, auto)",
                    gridGap: "15px",
                }}
            >
                <Container
                    style={{
                        backgroundColor: "#e0e0e0",
                        width: "100%",
                        height: "30px",
                        borderRadius: "5px",
                    }}
                />

                <Container
                    style={{
                        backgroundColor: "#e0e0e0",
                        width: "100%",
                        height: "30px",
                        borderRadius: "5px",
                    }}
                />

                <Container
                    style={{
                        backgroundColor: "#e0e0e0",
                        width: "100%",
                        height: "40px",
                        borderRadius: "5px",
                    }}
                />
            </CardContent>
        </Card>
    );
};
export default CourseCardSkeleton;
