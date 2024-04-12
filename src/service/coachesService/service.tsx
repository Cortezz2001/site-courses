import { API_URL, URLS } from "../consts";
import { ICoachCardInfo } from "./types";

export const CoachesService = {
    async getCoaches(): Promise<Array<ICoachCardInfo>> {
        //await new Promise((resolve) => setTimeout(resolve, 50000));
        const res = await fetch(API_URL + URLS.getCoaches);
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<ICoachCardInfo>>;
    },
};
