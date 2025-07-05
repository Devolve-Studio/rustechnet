"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Autoplay]);

const logos = [
    "/clients/c1.jpg",
    "/clients/c2.jpg",
    "/clients/c3.jpg",
    "/clients/c4.jpg",
    "/clients/c5.jpg",
    "/clients/c6.jpg",
    "/clients/c7.jpg",
    "/clients/c8.jpg",
    "/clients/c9.jpg",
    "/clients/c10.jpg",
    "/clients/c11.jpg",
    "/clients/c12.jpg",
    "/clients/c13.jpg",
    "/clients/c14.jpg",
    "/clients/c15.jpg",
];

export default function ClientsSliderInfinite() {
    return (
        <div className="w-[70vw] mx-auto overflow-hidden py-10">
            <Swiper
                spaceBetween={40}
                slidesPerView={5}
                loop={true}
                speed={6000}
                autoplay={{ delay: 0}}
                grabCursor={true}
                allowTouchMove={true}
            >
                {[...logos, ...logos].map((src, idx) => (
                    <SwiperSlide key={idx} >
                        <img
                            src={src}
                            alt={`Client ${idx + 1}`}
                            className="h-16 w-auto opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-300"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
