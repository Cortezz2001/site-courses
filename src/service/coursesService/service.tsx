import { API_URL, URLS } from "../consts";
import { ICourseCardInfo } from "./types";

export const CoursesService = {
    async getCourses(): Promise<Array<ICourseCardInfo>> {
        const res = await fetch(API_URL + URLS.getCourses);
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<ICourseCardInfo>>;
    },
};
