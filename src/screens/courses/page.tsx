import { Layout } from "@/layouts/layout";
import { CourseCard } from "@/modules/courseCard/courseCard";
import { Container, Header } from "@/UI/SUI";
export default function Courses() {
    return (
        <Layout>
            <Container>
                <Header as="h2">Header</Header>
                <CourseCard
                    image={"/example-course-photo.jpg"}
                    header={"123"}
                    description={"123"}
                />
            </Container>
        </Layout>
    );
}
