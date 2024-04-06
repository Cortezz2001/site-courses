import {
    Card,
    Button,
    CardProps,
    Image,
    CardContent,
    CardHeader,
    CardDescription,
    CardMeta,
} from "@/UI/SUI";

interface CardPropsCourse extends CardProps {
    image: React.ReactNode;
    header: string;
    description: string;
    extra?: React.ReactNode;
}

const extra = (
    <Button fluid style={{ backgroundColor: "#007397", color: "white" }}>
        Подробнее
    </Button>
);

export const CourseCard: React.FC<CardPropsCourse> = ({
    image,
    header,
    description,
}) => {
    return (
        <Card
            link
            style={{
                border: "1px solid #007397",
            }}
        >
            <Image
                src={image}
                alt=""
                width={500}
                height={500}
                quality={100}
                style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    objectPosition: "top",
                }}
            />
            <CardContent>
                <CardHeader>{header}</CardHeader>
                <CardDescription style={{ fontweight: "bold" }}>
                    {description}
                </CardDescription>
                <CardMeta style={{ marginTop: "15px" }}>{extra}</CardMeta>
            </CardContent>
        </Card>
    );
};
