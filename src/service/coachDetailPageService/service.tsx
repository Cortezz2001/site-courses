import { API_URL, LANGUAGES, URLS } from "../consts";
import { ICoachDetailPageInfo } from "./types";

export const CoachDetailPageService = {
    async getCoaches(id: number, language: LANGUAGES): Promise<ICoachDetailPageInfo> {
        const res = await fetch(`${API_URL + URLS.getCoaches}${id}`, {
            headers: {
                'Accept-Language': language
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<ICoachDetailPageInfo>;
    },
};
