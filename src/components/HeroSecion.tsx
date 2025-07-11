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
        src: "/slides/SolarFarm.jpg",
        heading: "Solar Farms Security",
        link: "/products",
    },
    {
        src: "/slides/WindFarm.jpg",
        heading: "Wind Farms Security",
        link: "/products",
    },
    {
        src: "/slides/LanNetwork.jpg",
        heading: "Lan Networking",
        link: "/products",
    },
    {
        src: "/slides/EPABX.jpg",
        heading: "EPABX Intercom System",
        link: "/products",
    },
    {
        src: "/slides/PASystems.jpg",
        heading: "PA Systems",
        link: "/products",
    },
    {
        src: "/slides/CCTV.jpg",
        heading: "CCTV Solutions",
        link: "/products",
    },
    {
        src: "/images/slides/slide7.jpeg",
        heading: "Metal and Sheets",
        link: "/products",
    },
    {
        src: "/images/slides/slide8.jpeg",
        heading: "Forming Rollers",
        link: "/products",
    },
    {
        src: "/images/slides/slide9.jpeg",
        heading: "Piping Jobs",
        link: "/products",
    },
    {
        src: "/images/slides/slide10.jpeg",
        heading: "Aluminium Sheet Components",
        link: "/products",
    },
    {
        src: "/images/slides/slide11.jpeg",
        heading: "Metal Sheet Tanks",
        link: "/products",
    },
];

export default function HeroSection() {
    // @ts-ignore
    const swiperRef = useRef<SwiperCore>();

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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 dark:bg-black/50 z-10" /> {/*backdrop-blur-xs*/}

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
                                <h2 className="text-white dark:text-[var(--foreground)] text-3xl md:text-5xl font-bold drop-shadow-md">
                                    {slide.heading}
                                </h2>
                                <Link
                                    href={slide.link}
                                    className="mt-6 inline-block bg-[#3fa9f5] text-black dark:text-white font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-[#3498db] transition"
                                >
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                <button
                    className="w-12 h-12 bg-[var(--foreground)] text-[var(--background)] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                <button
                    className="w-12 h-12 bg-[var(--foreground)] text-[var(--background)] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Scoped Pagination Styling */}
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
