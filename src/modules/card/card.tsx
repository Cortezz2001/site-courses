import { Card, Button, CardProps } from "@/UI/SUI";

interface CourseCardProps extends CardProps {
    image: string;
    header: string;
    description: string;
    extra?: React.ReactNode;
}

const extra = <Button fluid>Подробнее</Button>;

const CourseCard: React.FC<CourseCardProps> = ({ image, header, description }) => {
    return (
        <Card
            link
            image={image}
            header={header}
            meta={description}
            extra={extra}
        />
    );
}

export default CourseCard