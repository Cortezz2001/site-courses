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
