import { CoachCard } from "@/modules/coachCard/coachCard";
import { ICoachCardInfoGroup } from "@/service/types";
import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import Image from "next/image";

export const GroupCoachesCards: React.FC<ICoachCardInfoGroup> = ({
    coachesInfo,
}) => {
    const groupedCoaches = [];
    for (let i = 0; i < coachesInfo.length; i += 4) {
        groupedCoaches.push(coachesInfo.slice(i, i + 4));
    }

    return (
        <>
            {groupedCoaches.map((group, index) => (
                <Grid key={index} columns={4}>
                    <GridRow>
                        {group.map((coach) => (
                            <GridColumn key={coach.id}>
                                <CoachCard
                                    image={
                                        <Image
                                            src={"/" + coach.img}
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
                                    header={coach.name}
                                    description={coach.description}
                                />
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
            ))}
        </>
    );
};
