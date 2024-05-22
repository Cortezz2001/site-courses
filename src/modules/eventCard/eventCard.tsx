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

interface CardPropsEvent extends CardProps {
    image: React.ReactNode;
    header: string;
    description: string;
}

export const EventCard: React.FC<CardPropsEvent> = ({
    image,
    header,
    description,
}) => {
    return (
        <Card
            link
            style={{
                webkitBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                mozBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                width: "auto",
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
                    gridTemplateRows: "1fr 0 20px",
                    gridGap: "6px",
                }}
            >
                <CardHeader>{header}</CardHeader>
                <CardDescription
                    style={{ fontweight: "bold", marginBottom: "15px" }}
                >
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
};
