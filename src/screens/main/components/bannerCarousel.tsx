"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ISelectedBannersInfoGroup } from "@/service/bannersService/types";

export const BannerCarousel: React.FC<ISelectedBannersInfoGroup> = ({
    bannersInfo,
}) => {
    return (
        <>
            <Swiper
                style={
                    {
                        "--swiper-pagination-color": "white",
                        "--swiper-pagination-bullet-inactive-color": "white",
                        "--swiper-pagination-bullet-inactive-opacity": "0.35",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                        borderRadius: ".28571429rem",
                        lineHeight: "0",
                    } as any
                }
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 10000 }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
                {bannersInfo.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            width={1330}
                            height={600}
                            src={banner.img}
                            alt={banner.img}
                            style={{ objectFit: "cover" }}
                        />
                    </SwiperSlide>
                ))}
                <div
                    className="swiper-button-prev"
                    style={{ color: "white" }}
                ></div>
                <div
                    className="swiper-button-next"
                    style={{ color: "white" }}
                ></div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    );
};
