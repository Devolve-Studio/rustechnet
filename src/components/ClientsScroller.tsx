"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Autoplay]);

export default function ClientsSliderInfinite() {
    const [logos, setLogos] = useState<string[]>([]);
    
    useEffect(() => {
        fetch('/api/clients')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setLogos(data);
                }
            })
            .catch(err => console.error('Failed to load clients:', err));
    }, []);

    if (logos.length === 0) {
        return <section className="py-10 text-center opacity-50">Loading clients...</section>;
    }

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
                            <SwiperSlide key={`md-${idx}`}>
                                <picture>
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
                            <SwiperSlide key={`sm-${idx}`}>
                                <picture>
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
