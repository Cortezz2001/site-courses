import { API_URL, LANGUAGES, URLS } from "../consts";
import { IEventCardInfo } from "./types";

export const EventsService = {
    async getEvents(language: LANGUAGES): Promise<Array<IEventCardInfo>> {
        const res = await fetch(API_URL + URLS.getEvents, {
            headers: {
                'Accept-Language': language
            }
        });
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<IEventCardInfo>>;
    },
};
