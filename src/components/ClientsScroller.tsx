"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Autoplay]);

const logos = [
    "c1.png", "c2.png", "c3.png", "c4.png", "c5.png",
    "c6.png", "c7.png", "c8.png", "c9.png", "c10.png",
    "c11.png", "c12.png", "c13.png", "c14.png", "c15.png",
    "c16.png", "c17.png",
];

export default function ClientsSliderInfinite() {
    return (
        <div className="w-[70vw] mx-auto overflow-hidden py-10">
            <Swiper
                spaceBetween={40}
                slidesPerView={5}
                loop={true}
                speed={6000}
                autoplay={{ delay: 0 }}
                grabCursor={true}
                allowTouchMove={true}
            >
                {[...logos, ...logos].map((logo, idx) => {
                    const darkLogo = logo.replace(".png", "_dark.png");

                    return (
                        <SwiperSlide key={idx}>
                            <picture>
                                {/* Light theme version (default) */}
                                <source
                                    srcSet={`/clients/${darkLogo}`}
                                    media="(prefers-color-scheme: light)"
                                />
                                {/* Dark theme version (fallback) */}
                                <img
                                    src={`/clients/${logo}`}
                                    alt={`Client ${idx + 1}`}
                                    draggable={false}
                                    unselectable="on"
                                    className="h-30 w-auto opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-300 pointer-events-none select-none"
                                />
                            </picture>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
