"use client";
import { CoachCard } from "@/modules/coachCard/coachCard";
import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import style from "../style.module.css";

export const CoachesCarousel: React.FC<ICoachCardInfoGroup> = ({
    coachesInfo,
}) => {
    return (
        <>
            <Swiper
                className={style.coaches_carousel}
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
                        slidesPerView: 3,
                    },
                }}
            >
                {coachesInfo.map((coach) => (
                    <SwiperSlide key={coach.id} style={{ height: "auto" }}>
                        <Link href={`/coaches/${coach.id}`}>
                            <CoachCard
                                image={coach.img}
                                header={coach.name}
                                description={coach.role}
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
