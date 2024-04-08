import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    Image,
    CardProps,
} from "@/UI/SUI";

interface CardPropsCoach extends CardProps {
    image: React.ReactNode;
    header: string;
    description: string;
}

export const CoachCard: React.FC<CardPropsCoach> = ({
    image,
    header,
    description,
}) => {
    return (
        <Card link style={{ border: "1px solid #007397", height: "100%" }}>
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
            <CardContent
                style={{
                    padding: "15px",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "1fr 5px 20px",
                    gridGap: "6px",
                }}
            >
                <CardHeader>{header}</CardHeader>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    );
};
