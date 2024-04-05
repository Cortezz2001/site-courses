import { Layout } from "@/layouts/layout";
import { CardTemplate } from "@/modules/card/card";
import { Container, Grid, GridColumn, GridRow, Header } from "@/UI/SUI";
import Image from "next/image";
export default function Coaches() {
    const coaches = [
        {
            id: 1,
            image: "example-course-photo.jpg",
            header: "coach 1",
            description: "Description 1",
        },
        {
            id: 2,
            image: "example-course-photo.jpg",
            header: "coach 2",
            description: "Description 2",
        },
        {
            id: 3,
            image: "123.jpg",
            header: "coach 3",
            description: "Description 3",
        },
        {
            id: 4,
            image: "example-course-photo.jpg",
            header: "coach 4",
            description: "Description 4",
        },
        {
            id: 5,
            image: "logo.png",
            header: "coach 5",
            description: "Description 5",
        },
        {
            id: 6,
            image: "logo.png",
            header: "coach 6",
            description: "Description 5",
        },
        {
            id: 7,
            image: "123.jpg",
            header: "coach 7",
            description: "Description 5",
        },
        {
            id: 8,
            image: "image.png",
            header: "coach 8",
            description: "Description 5",
        },
    ];

    const groupedCoaches = [];
    for (let i = 0; i < coaches.length; i += 4) {
        groupedCoaches.push(coaches.slice(i, i + 4));
    }
    return (
        <Layout>
            <Container>
                <Header as="h1" style={{ marginBottom: "30px" }}>
                    Тренеры
                </Header>
                {groupedCoaches.map((group, index) => (
                    <Grid key={index} columns={4}>
                        <GridRow>
                            {group.map((coach) => (
                                <GridColumn key={coach.id}>
                                    <CardTemplate
                                        image={
                                            <Image
                                                src={"/" + coach.image}
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
                                        }
                                        header={coach.header}
                                        description={coach.description}
                                    />
                                </GridColumn>
                            ))}
                        </GridRow>
                    </Grid>
                ))}
            </Container>
        </Layout>
    );
}
