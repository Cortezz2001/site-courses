import { API_URL, URLS } from "../consts";
import { IEventDetailPageInfo } from "./types";

export const EventDetailPageService = {
    async getEvents(id: number): Promise<IEventDetailPageInfo> {
        const res = await fetch(`${API_URL + URLS.getEvents}${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<IEventDetailPageInfo>;
    },
};
