"use client";
import { CourseCard } from "@/modules/courseCard/courseCard";
import { ICourseCardInfoGroup } from "@/service/coursesService/types";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocale } from "next-intl";

import style from "../style.module.css";

export const CoursesCarousel: React.FC<ICourseCardInfoGroup> = ({
    coursesInfo,
}) => {
    const locale = useLocale();
    return (
        <>
            <Swiper
                className={style.courses_carousel}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                spaceBetween={20}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                }}
            >
                {coursesInfo.map((course) => (
                    <SwiperSlide
                        key={course.id}
                        style={{
                            height: "auto",
                        }}
                    >
                        <Link href={`/${locale}/courses/${course.id}`}>
                            <CourseCard
                                image={course.img}
                                header={course.title}
                                description={course.price + " тг"}
                                program={course.bid}
                            />
                        </Link>
                    </SwiperSlide>
                ))}

                <div
                    className="swiper-button-prev"
                    style={{
                        color: "#007397",
                        left: "1.5em",
                    }}
                ></div>
                <div
                    className="swiper-button-next"
                    style={{
                        color: "#007397",
                        right: "1.5em",
                    }}
                ></div>
            </Swiper>
        </>
    );
};
