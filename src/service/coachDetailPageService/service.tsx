import { API_URL, URLS } from "../consts";
import { ICoachDetailPageInfo } from "./types";

export const CoachDetailPageService = {
    async getCoaches(): Promise<Array<ICoachDetailPageInfo>> {
        //await new Promise((resolve) => setTimeout(resolve, 15000));
        const res = await fetch(API_URL + URLS.getCoaches);
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<ICoachDetailPageInfo>>;
    },
};
