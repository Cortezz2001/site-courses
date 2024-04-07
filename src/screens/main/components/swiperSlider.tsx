"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
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

export default function SwiperSlider() {
    return (
        <>
            <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
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
            </Swiper>
        </>
    );
}
