import { API_URL, URLS } from "../consts";
import { ICoachDetailPageInfo } from "./types";

export const CoachDetailPageService = {
    async getCoaches(id: number): Promise<ICoachDetailPageInfo> {
        const res = await fetch(`${API_URL + URLS.getCoaches}${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<ICoachDetailPageInfo>;
    },
};
