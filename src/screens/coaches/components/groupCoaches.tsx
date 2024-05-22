import { CoachCard } from "@/modules/coachCard/coachCard";
import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import { useLocale } from "next-intl";
import Link from "next/link";

import style from "../style.module.css";

export const GroupCoachesCards: React.FC<ICoachCardInfoGroup> = ({
    coachesInfo,
}) => {
    const locale = useLocale();
    return (
        <>
            <Grid doubling columns={4}>
                <GridRow className={style.card_container}>
                    {coachesInfo.map((coach) => (
                        <GridColumn key={coach.id}>
                            <Link href={`/${locale}/coaches/${coach.id}`}>
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
