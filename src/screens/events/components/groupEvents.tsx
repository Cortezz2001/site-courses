import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import { EventCard } from "@/modules/eventCard/eventCard";
import { IEventCardInfoGroup } from "@/service/eventsService/types";
import { useLocale } from "next-intl";
import Link from "next/link";

import style from "../style.module.css";

export const GroupEventsCards: React.FC<IEventCardInfoGroup> = ({
    eventsInfo,
}) => {
    const locale = useLocale();
    return (
        <>
            <Grid doubling columns={4}>
                <GridRow className={style.card_container}>
                    {eventsInfo.map((event) => (
                        <GridColumn key={event.id}>
                            <Link href={`/${locale}/events/${event.id}`}>
                                <EventCard
                                    image={event.img}
                                    header={event.title}
                                    description={
                                        event.startDate + ", " + event.startTime
                                    }
                                />
                            </Link>
                        </GridColumn>
                    ))}
                </GridRow>
            </Grid>
        </>
    );
};
