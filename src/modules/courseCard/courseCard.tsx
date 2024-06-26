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
import { useTranslations } from "next-intl";

interface CardPropsCourse extends CardProps {
    image: React.ReactNode;
    header: string;
    description: string;
    extra?: React.ReactNode;
}



export const CourseCard: React.FC<CardPropsCourse> = ({
    image,
    header,
    description,
    program,
}) => {
    const t = useTranslations("CourseCard");

    const extra = (
        <Button
            style={{
                backgroundColor: "#007397",
                color: "white",
                width: "-webkit-fill-available",
            }}
        >
            {t('moreDetails')}
        </Button>
    );
    return (
        <Card
            link
            style={{
                width: "auto",
                height: "100%",
                webkitBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                mozBoxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
                boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
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
                <CardMeta>
                    {program?.length > 0 && <span>{t('program')} {program}</span>}
                </CardMeta>
                <CardDescription
                    style={{ fontweight: "bold", marginBottom: "15px" }}
                >
                    <Header sub style={{ margin: "0" }}>
                        {t('price')}
                    </Header>
                    <span>{description}</span>
                </CardDescription>
                <CardMeta style={{ marginTop: "auto" }}>{extra}</CardMeta>
            </CardContent>
        </Card>
    );
};
