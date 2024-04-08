"use client";
import { CourseCard } from "@/modules/courseCard/courseCard";
import { ICourseCardInfoGroup } from "@/service/coursesService/types";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CoursesCarousel: React.FC<ICourseCardInfoGroup> = ({
    coursesInfo,
}) => {
    return (
        <>
            <Swiper
                style={{
                    paddingTop: "20px",
                    paddingLeft: "5px",
                    paddingRight: "8px",
                }}
                spaceBetween={20}
                slidesPerView={4}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
                {coursesInfo.map((course) => (
                    <SwiperSlide key={course.id}>
                        <CourseCard
                            image={course.img}
                            header={course.title}
                            description={course.price + " тг"}
                        />
                    </SwiperSlide>
                ))}

                <div
                    className="swiper-button-prev"
                    style={{
                        color: "white",
                        filter: "drop-shadow(0px 0px 5px 2px #007397)",
                    }}
                ></div>
                <div
                    className="swiper-button-next"
                    style={{
                        color: "white",
                        filter: "drop-shadow(0px 0px 5px 2px #007397)",
                    }}
                ></div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    );
};
