import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    Image,
    CardProps,
} from "@/UI/SUI";

import style from "./style.module.css";

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
                webkitBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                mozBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                width: "auto",
                height: "100%",
            }}
            className={style.card_content_wrapper}
        >
            <Image
                src={image}
                alt={image}
                quality={100}
                style={{
                    width: "100%",
                    height: "380px",
                    maxHeight: "400px",
                    objectFit: "cover",
                    objectPosition: "top",
                }}
                className={style.card_image}
            />
            <CardContent
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <CardHeader
                    style={{
                        flexGrow: "1",
                        minHeight: "46px",
                    }}
                >
                    {header}
                </CardHeader>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    );
};
