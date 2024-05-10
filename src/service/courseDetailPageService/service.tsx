import { API_URL, URLS } from "../consts";
import { ICourseDetailPageInfo } from "./types";

export const CourseDetailPageService = {
    async getCourses(id: number): Promise<ICourseDetailPageInfo> {
        const res = await fetch(`${API_URL + URLS.getCourses}${id}`);
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<ICourseDetailPageInfo>;
    },
};
