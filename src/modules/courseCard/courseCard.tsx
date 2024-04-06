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

const extra = <Button fluid>Подробнее</Button>;

export const CourseCard: React.FC<CardPropsCourse> = ({
    image,
    header,
    description,
}) => {
    return (
        <Card link>
            <Image
                src={image}
                alt=""
                width={500}
                height={500}
                quality={100}
                style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    objectPosition: "top",
                }}
            />
            <CardContent>
                <CardHeader>{header}</CardHeader>
                <CardDescription>{description}</CardDescription>
                <CardMeta>{extra}</CardMeta>
            </CardContent>
        </Card>
    );
};
