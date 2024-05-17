import { API_URL, LANGUAGES, URLS } from "../consts";
import { ICourseDetailPageInfo } from "./types";

export const CourseDetailPageService = {
    async getCourses(id: number, language: LANGUAGES): Promise<ICourseDetailPageInfo> {
        const res = await fetch(`${API_URL + URLS.getCourses}${id}`, {
            headers: {
                'Accept-Language': language
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<ICourseDetailPageInfo>;
    },
};
