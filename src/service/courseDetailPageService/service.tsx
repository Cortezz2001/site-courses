import { API_URL, URLS } from "../consts";
import { ICourseDetailPageInfo } from "./types";

export const CourseDetailPageService = {
    async getCourses(id: number): Promise<ICourseDetailPageInfo> {
        const res = await fetch(`${API_URL + URLS.getCourses}${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<ICourseDetailPageInfo>;
    },
};
