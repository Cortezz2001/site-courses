import { Card, Button, CardProps } from "@/UI/SUI";

interface CardPropsCoach extends CardProps {
    image: React.ReactNode; //string
    header: string;
    description: string;
    extra?: React.ReactNode;
}

const extra = <Button fluid>Подробнее</Button>;

export const CoachCard: React.FC<CardPropsCoach> = ({
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
