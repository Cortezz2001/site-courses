import { Card, Button, CardProps } from "@/UI/SUI";
import Image from "next/image";

interface CardPropsTemplate extends CardProps {
    image: React.ReactNode; //string
    header: string;
    description: string;
    extra?: React.ReactNode;
}

const extra = <Button fluid>Подробнее</Button>;

export const CardTemplate: React.FC<CardPropsTemplate> = ({
    image,
    header,
    description,
}) => {
    return (
        <Card
            link
            image={image}
            header={header}
            meta={description}
            extra={extra}
        />
    );
};
{
    /* <Image
src={"/" + image}
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
/> */
}
