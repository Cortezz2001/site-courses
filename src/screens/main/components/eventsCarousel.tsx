"use client";
import { EventCard } from "@/modules/eventCard/eventCard";
import { IEventCardInfoGroup } from "@/service/eventsService/types";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import style from "../style.module.css";

export const EventsCarousel: React.FC<IEventCardInfoGroup> = ({
    eventsInfo,
}) => {
    return (
        <>
            <Swiper
                className={style.events_carousel}
                spaceBetween={20}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
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
                {eventsInfo.map((event) => (
                    <SwiperSlide key={event.id} style={{ height: "auto" }}>
                        <Link href={`/events/${event.id}`}>
                            <EventCard
                                image={event.img}
                                header={event.title}
                                description={
                                    event.startDate + ", " + event.startTime
                                }
                            />
                        </Link>
                    </SwiperSlide>
                ))}

                <div
                    className="swiper-button-prev"
                    style={{
                        color: "white",
                        left: "1.5em",
                    }}
                ></div>
                <div
                    className="swiper-button-next"
                    style={{
                        color: "white",
                        right: "1.5em",
                    }}
                ></div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    );
};
