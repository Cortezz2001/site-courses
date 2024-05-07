import { API_URL, URLS } from "../consts";
import { IEventDetailPageInfo } from "./types";

export const EventDetailPageService = {
    async getEvents(): Promise<Array<IEventDetailPageInfo>> {
        const res = await fetch(API_URL + URLS.getEvents);
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<IEventDetailPageInfo>>;
    },
};
