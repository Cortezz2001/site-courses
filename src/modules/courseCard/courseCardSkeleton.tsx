import { Card, CardContent, Image } from "@/UI/SUI";

const CourseCardSkeleton = () => {
    return (
        <Card
            style={{
                height: "100%",
            }}
        >
            <Image
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                alt=""
                width={500}
                height={500}
                quality={100}
                style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "top",
                }}
            />
            <CardContent
                style={{
                    paddingTop: "15px",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "180px ",
                    gridGap: "6px",
                }}
            >
                <Image
                    alt=""
                    size="medium"
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                    style={{ alignSelf: "center" }}
                />
            </CardContent>
        </Card>
    );
};
export default CourseCardSkeleton;
