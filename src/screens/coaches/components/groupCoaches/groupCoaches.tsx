import { CoachCard } from "@/modules/coachCard/coachCard";
import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import { useLocale } from "next-intl";
import Link from "next/link";

export const GroupCoachesCards: React.FC<ICoachCardInfoGroup> = ({
    coachesInfo,
}) => {
    const groupedCoaches = [];
    for (let i = 0; i < coachesInfo.length; i += 4) {
        groupedCoaches.push(coachesInfo.slice(i, i + 4));
    }
    const locale = useLocale();
    return (
        <>
            {groupedCoaches.map((group, index) => (
                <Grid
                    key={index}
                    columns={4}
                    style={{ marginLeft: "0", marginRight: "0" }}
                >
                    <GridRow
                        style={{
                            minWidth: "100%",
                            display: "flex",
                            justifyContent: "start",
                            gap: "24px",
                        }}
                    >
                        {group.map((coach) => (
                            <GridColumn
                                key={coach.id}
                                style={{ width: "max-content", padding: "0" }}
                            >
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
            ))}
        </>
    );
};
