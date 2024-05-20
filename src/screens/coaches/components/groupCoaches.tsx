import { CoachCard } from "@/modules/coachCard/coachCard";
import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import Link from "next/link";

import style from "../style.module.css";

export const GroupCoachesCards: React.FC<ICoachCardInfoGroup> = ({
    coachesInfo,
}) => {
    return (
        <>
            <Grid doubling columns={4}>
                <GridRow className={style.card_container}>
                    {coachesInfo.map((coach) => (
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
        </>
    );
};
