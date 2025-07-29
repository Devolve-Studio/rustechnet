"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Autoplay]);

const logos = [
    "c1.webp", "c2.webp", "c3.webp", "c4.webp", "c5.webp",
    "c6.webp", "c7.webp", "c8.webp", "c9.webp", "c10.webp",
    "c11.webp", /*"c12.webp", "c13.webp",*/ "c14.webp", "c15.webp",
    "c16.webp", "c17.webp", "c18.webp",
];

export default function ClientsSliderInfinite() {
    return (
        <section>
            <div className="w-[70vw] mx-auto overflow-hidden py-10 hidden md:block">
                <Swiper
                    spaceBetween={40}
                    slidesPerView={5}
                    loop={true}
                    speed={6000}
                    autoplay={{delay: 0}}
                    grabCursor={true}
                    allowTouchMove={true}
                >
                    {[...logos, ...logos].map((logo, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <picture>
                                    {/* Dark theme version (fallback) */}
                                    <img
                                        src={`/clients/${logo}`}
                                        alt={`Client ${idx + 1}`}
                                        draggable={false}
                                        unselectable="on"
                                        className="h-30 w-auto opacity-80 filter brightness-110 hover:opacity-100 hover:grayscale-0 transition duration-300 pointer-events-none select-none"
                                    />
                                </picture>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="w-[70vw] mx-auto overflow-hidden py-10 md:hidden block">
                <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    loop={true}
                    speed={6000}
                    autoplay={{ delay: 0 }}
                    grabCursor={true}
                    allowTouchMove={true}
                >
                    {[...logos, ...logos].map((logo, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <picture>
                                    {/* Dark theme version (fallback) */}
                                    <img
                                        src={`/clients/${logo}`}
                                        alt={`Client ${idx + 1}`}
                                        draggable={false}
                                        unselectable="on"
                                        className="h-30 w-auto opacity-80 filter brightness-110 hover:opacity-100 hover:grayscale-0 transition duration-300 pointer-events-none select-none"
                                    />
                                </picture>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
