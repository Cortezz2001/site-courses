import { API_URL, URLS } from "../consts";
import { IEventCardInfo } from "./types";

export const EventsService = {
    async getEvents(): Promise<Array<IEventCardInfo>> {
        const res = await fetch(API_URL + URLS.getEvents);
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<IEventCardInfo>>;
    },
};
