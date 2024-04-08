import { CoachCard } from "@/modules/coachCard/coachCard";
import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import Link from "next/link";

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
                                <Link href={`/coaches/${coach.id}`}>
                                    <CoachCard
                                        image={coach.img}
                                        header={coach.name}
                                        description={coach.role}
                                    />
                                </Link>
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
            ))}
        </>
    );
};
