"use client";
import { CoachCard } from "@/modules/coachCard/coachCard";
import { ICoachCardInfoGroup } from "@/service/coachesService/types";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocale } from "next-intl";

export const CoachesCarousel: React.FC<ICoachCardInfoGroup> = ({
    coachesInfo,
}) => {
    const locale = useLocale();
    return (
        <>
            <Swiper
                style={{
                    paddingTop: "20px",
                    paddingLeft: "5px",
                    paddingBottom: "20px",
                    marginLeft: "-5px",
                    marginRight: "-5px",
                }}
                spaceBetween={20}
                slidesPerView={4}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
                {coachesInfo.map((coach) => (
                    <SwiperSlide key={coach.id} style={{ height: "auto" }}>
                        <Link href={`/${locale}/coaches/${coach.id}`}> 
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
                    style={{ color: "#007397" }}
                ></div>
                <div
                    className="swiper-button-next"
                    style={{ color: "#007397" }}
                ></div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    );
};
