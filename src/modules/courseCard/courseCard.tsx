import {
    Card,
    Button,
    CardProps,
    Image,
    CardContent,
    CardHeader,
    CardDescription,
    CardMeta,
    Header,
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
                height: "100%",
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
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "top",
                }}
            />
            <CardContent
                style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardHeader>{header}</CardHeader>
                <CardDescription
                    style={{ fontweight: "bold", marginBottom: "15px" }}
                >
                    <Header sub>Цена</Header>
                    <span>{description}</span>
                </CardDescription>
                <CardMeta style={{ marginTop: "auto" }}>{extra}</CardMeta>
            </CardContent>
        </Card>
    );
};
