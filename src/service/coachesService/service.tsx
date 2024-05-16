import { API_URL, LANGUAGES, URLS } from "../consts";
import { ICoachCardInfo } from "./types";

export const CoachesService = {
    async getCoaches(language: LANGUAGES) {
        const response = await fetch(API_URL + URLS.getCoaches, {
            headers: {
                'Accept-Language': language
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const res = await response.json()
        return res as Array<ICoachCardInfo>
    },
};