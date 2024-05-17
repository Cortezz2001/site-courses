import { API_URL, LANGUAGES, URLS } from "../consts";
import { IEventDetailPageInfo } from "./types";

export const EventDetailPageService = {
    async getEvents(id: number, language: LANGUAGES): Promise<IEventDetailPageInfo> {
        const res = await fetch(`${API_URL + URLS.getEvents}${id}`, {
            headers: {
                'Accept-Language': language
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<IEventDetailPageInfo>;
    },
};
