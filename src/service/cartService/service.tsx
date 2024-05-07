import { API_URL, URLS } from "../consts";
import { ISelectedCoursesInfo, ISelectedCoursesInfoGroup } from "./types";

//Необходимо изменить url и настройить функиии(это шаблон)

export const SelectedCoursesInfoService = {
    async getSelectedCourses(): Promise<ISelectedCoursesInfoGroup> {
        //await new Promise((resolve) => setTimeout(resolve, 15000));
        const res = await fetch(API_URL + URLS.getCoaches);
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<ISelectedCoursesInfoGroup>;
    },
};