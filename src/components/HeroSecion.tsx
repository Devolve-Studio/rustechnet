'use client';

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        src: "/slides/SolarFarm.mp4",
        heading: "Solar Farms Security",
        link: "/contact",
    },
    {
        src: "/slides/WindFarm.mp4",
        heading: "Wind Farms Security",
        link: "/contact",
    },
    {
        src: "/slides/LanNetwork.jpg",
        heading: "Lan Networking",
        link: "/contact",
    },
    {
        src: "/slides/EPABX.jpg",
        heading: "EPABX Intercom System",
        link: "/contact",
    },
    //{
    //    src: "/slides/PASystems.jpg",
    //    heading: "PA Systems",
    //    link: "/contact",
    //},
    {
        src: "/slides/FireAlarm.jpg",
        heading: "Fire Alarm Systems",
        link: "/contact",
    },
];

export default function HeroSection() {
    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <section className="relative w-full h-[calc(100vh-80px)] hero-slider overflow-hidden">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="w-full h-full"
            >
                {slides.map((slide, index) => {
                    const isVideo = /\.(mp4|webm|ogg)$/i.test(slide.src);
                    const thumbnail = slide.src.replace(/\.(mp4|webm|ogg)$/i, ".jpg");

                    return (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                                {isVideo ? (
                                    <>
                                        {/* Fallback Image */}
                                        <Image
                                            src={thumbnail}
                                            alt={`Thumbnail for ${slide.heading}`}
                                            fill
                                            className="object-cover z-0"
                                            priority={index === 0}
                                        />

                                        {/* Video Layer */}
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover z-10"
                                            poster={thumbnail}
                                        >
                                            <source src={slide.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </>
                                ) : (
                                    <Image
                                        src={slide.src}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                        className="object-cover z-10"
                                        priority={index === 0}
                                    />
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 dark:bg-black/50 z-20" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-30">
                                    <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md">
                                        {slide.heading}
                                    </h2>
                                    <Link
                                        href={slide.link}
                                        className="mt-6 inline-block bg-[#00a86b] text-black dark:text-white font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-[#3498db] transition"
                                    >
                                        Inquire Now!!
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-4 z-40 -translate-y-1/2">
                <button
                    className="w-12 h-12 bg-[var(--foreground)] text-[var(--background)] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 z-40 -translate-y-1/2">
                <button
                    className="w-12 h-12 bg-[var(--foreground)] text-[var(--background)] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Swiper Pagination Styling */}
            <style jsx>{`
                .hero-slider :global(.swiper-pagination-bullet) {
                    background-color: var(--foreground);
                    opacity: 0.5;
                    transition: all 0.3s ease-in-out;
                }
                .hero-slider :global(.swiper-pagination-bullet-active) {
                    background-color: var(--foreground);
                    opacity: 1;
                    width: 14px;
                    height: 14px;
                }
            `}</style>
        </section>
    );
}