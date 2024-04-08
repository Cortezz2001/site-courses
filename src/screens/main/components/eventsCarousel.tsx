"use client";
import { EventCard } from "@/modules/eventCard/eventCard";
import { IEventCardInfoGroup } from "@/service/eventsService/types";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const EventsCarousel: React.FC<IEventCardInfoGroup> = ({
    eventsInfo,
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
                {eventsInfo.map((event) => (
                    <SwiperSlide key={event.id}>
                        <EventCard
                            image={event.img}
                            header={event.title}
                            description={
                                event.startDate + ", " + event.startTime
                            }
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