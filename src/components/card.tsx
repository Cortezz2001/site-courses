import { Card, Button } from "@/UI/SUI";

const extra = <Button fluid>Подробнее</Button>;

export default function CourseCard() {
    return (
        <Card
            link
            image="/example-course-photo.jpg"
            header="Название курса"
            meta="Количество уроков в курсе"
            extra={extra}
        />
    );
}
