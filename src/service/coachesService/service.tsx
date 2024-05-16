import { API_URL, LANGUAGES, URLS } from "../consts";
import { ICoachCardInfo } from "./types";

export const CoachesService = {
    async getCoaches(language: LANGUAGES): Promise<Array<ICoachCardInfo>> {
        const response = await fetch(API_URL + URLS.getCoaches, {
            headers: {
                'Accept-Language': language
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return await response.json()
    },
};