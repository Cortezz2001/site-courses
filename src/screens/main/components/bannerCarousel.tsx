"use client";
import { Image } from "@/UI/SUI";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "../style.module.css";
import { ISelectedBannersInfoGroup } from "@/service/bannersService/types";

export const BannerCarousel: React.FC<ISelectedBannersInfoGroup> = ({
    bannersInfo,
}) => {
    return (
        <>
            <Swiper
                className={style.banner_carousel_container}
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
                            src={banner.img}
                            alt={banner.img}
                            className={style.banner_carousel_image}
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
