import { Grid, GridColumn, GridRow } from "@/UI/SUI";
import { EventCard } from "@/modules/eventCard/eventCard";
import { IEventCardInfoGroup } from "@/service/eventsService/types";

export const GroupEventsCards: React.FC<IEventCardInfoGroup> = ({
    eventsInfo,
}) => {
    const groupedEvents = [];
    for (let i = 0; i < eventsInfo.length; i += 4) {
        groupedEvents.push(eventsInfo.slice(i, i + 4));
    }

    return (
        <>
            {groupedEvents.map((group, index) => (
                <Grid key={index} columns={4}>
                    <GridRow>
                        {group.map((event) => (
                            <GridColumn key={event.id}>
                                <EventCard
                                    image={event.img}
                                    header={event.title}
                                    description={
                                        event.startDate + ", " + event.startTime
                                    }
                                />
                            </GridColumn>
                        ))}
                    </GridRow>
                </Grid>
            ))}
        </>
    );
};
