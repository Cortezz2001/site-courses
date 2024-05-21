import { API_URL, URLS } from "../consts";
import { IBannerInfo } from "./types";

export const BannersService = {
    async getBanners(): Promise<Array<IBannerInfo>> {
        const res = await fetch(API_URL + URLS.getBanners);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<IBannerInfo>>;
    },
};
