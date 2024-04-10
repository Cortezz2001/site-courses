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
    <Button
        style={{
            backgroundColor: "#007397",
            color: "white",
            width: "-webkit-fill-available",
        }}
    >
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
                boxShadow: "0px 0px 5px 1px #007397",
                width: "auto",
                maxWidth: "314.25px",
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
                    padding: "15px",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "1fr 40px 50px",
                    gridGap: "6px",
                }}
            >
                <CardHeader>{header}</CardHeader>
                <CardDescription
                    style={{ fontweight: "bold", marginBottom: "15px" }}
                >
                    <Header sub style={{ margin: "0" }}>
                        Цена
                    </Header>
                    <span>{description}</span>
                </CardDescription>
                <CardMeta style={{ marginTop: "auto" }}>{extra}</CardMeta>
            </CardContent>
        </Card>
    );
};
