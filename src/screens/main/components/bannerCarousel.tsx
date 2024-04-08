"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slideImage_1 from "../../../../public/banner-slide-1.png";
import slideImage_2 from "../../../../public/banner-slide-2.png";
import slideImage_3 from "../../../../public/banner-slide-3.png";
import slideImage_4 from "../../../../public/banner-slide-4.png";
import slideImage_5 from "../../../../public/banner-slide-5.png";

const images = [
    { src: slideImage_1, alt: "slideImage_1" },
    { src: slideImage_2, alt: "slideImage_2" },
    { src: slideImage_3, alt: "slideImage_3" },
    { src: slideImage_4, alt: "slideImage_4" },
    { src: slideImage_5, alt: "slideImage_5" },
];

export default function BannerCarousel() {
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
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            width={1127}
                            height={527}
                            src={image.src}
                            alt={image.alt}
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
}
