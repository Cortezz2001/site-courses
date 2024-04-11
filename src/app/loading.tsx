import { Layout } from "@/layouts/layout";
import ActionBlock from "@/screens/main/components/actionBlock";
import BannerCarousel from "@/screens/main/components/bannerCarousel";
import InfoBlock from "@/screens/main/components/infoBlock";
import CoachCardSkeleton from "@/UI/skeletons/coachCardSkeleton";
import CourseCardSkeleton from "@/UI/skeletons/courseCardSkeleton";
import EventCardSkeleton from "@/UI/skeletons/eventCardSkeleton";
import { Grid, GridColumn, GridRow, Header } from "@/UI/SUI";

export default function Loading() {
    return (
        <Layout>
            <>
                <BannerCarousel />
                <Header as="h2">Курсы</Header>
                <Grid
                    columns={4}
                    style={{
                        paddingTop: "20px",

                        paddingBottom: "20px",
                    }}
                >
                    <GridRow>
                        {[...Array(4)].map((_, index) => (
                            <GridColumn key={index}>
                                <CourseCardSkeleton />
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
                <Header as="h2">Наши тренеры</Header>
                <Grid
                    columns={4}
                    style={{
                        paddingTop: "20px",

                        paddingBottom: "20px",
                    }}
                >
                    <GridRow>
                        {[...Array(4)].map((_, index) => (
                            <GridColumn key={index}>
                                <CoachCardSkeleton />
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
                <ActionBlock />
                <Header as="h2">Анонсы наших мероприятий</Header>
                <Grid
                    columns={4}
                    style={{
                        paddingTop: "20px",

                        paddingBottom: "20px",
                    }}
                >
                    <GridRow>
                        {[...Array(4)].map((_, index) => (
                            <GridColumn key={index}>
                                <EventCardSkeleton />
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
                <InfoBlock />
            </>
        </Layout>
    );
}
