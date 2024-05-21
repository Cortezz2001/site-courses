import { API_URL, LANGUAGES, URLS } from "../consts";
import { ICourseCardInfo } from "./types";

export const CoursesService = {
    async getCourses(language: LANGUAGES): Promise<Array<ICourseCardInfo>> {
        const res = await fetch(API_URL + URLS.getCourses, {
            headers: {
                'Accept-Language': language
            }
        });
        if (res.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        return res.json() as Promise<Array<ICourseCardInfo>>;
    },
};

// Задержка фетча
// export const CoursesService = {
//     async getCourses(): Promise<Array<ICourseCardInfo>> {
//         // Замедляем fetch на 2 секунды
//         await new Promise((resolve) => setTimeout(resolve, 5000));

//         const res = await fetch(API_URL + URLS.getCourses);
//         if (res.status !== 200) {
//             throw new Error("Failed to fetch data");
//         }
//         return res.json() as Promise<Array<ICourseCardInfo>>;
//     },
// };
