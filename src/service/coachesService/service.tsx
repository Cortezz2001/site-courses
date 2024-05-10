import { API_URL, URLS } from "../consts";
import { ICoachCardInfo } from "./types";

export const CoachesService = {
    async getCoaches(): Promise<Array<ICoachCardInfo>> {
        const res = await fetch(API_URL + URLS.getCoaches);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<ICoachCardInfo>>;
    },
};
