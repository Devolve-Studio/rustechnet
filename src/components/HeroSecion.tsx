"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

const slides = [
    {
        src: "/slides/SolarFarm.jpg",
        heading: "Solar Farms Security",
        //caption: "Your Caption for Slide 2",
        link: "/products",
    },
    {
        src: "/slides/WindFarm.jpg",
        heading: "Wind Farms Security",
        //caption: "Your Caption for Slide 2",
        link: "/products",
    },
    {
        src: "/images/slides/slide3.jpeg",//issue
        heading: "SS Feed Hoppers",
        //caption: "Your Caption for Slide 3",
        link: "/products",
    },
    {
        src: "/images/slides/slide4.jpeg",
        heading: "Conveyor Systems",
        link: "/products",
    },
    {
        src: "/images/slides/slide5.jpeg",//issue
        heading: "Storage Tanks",
        link: "/products",
    },
    {
        src: "/images/slides/slide6.jpeg",
        heading: "Blister Packaging Systems",
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
        src: "/images/slides/slide9.jpeg",//issue
        heading: "Piping Jobs",
        link: "/products",
    },
    {
        src: "/images/slides/slide10.jpeg",//issue
        heading: "Aluminium Sheet Components",
        link: "/products",
    },
    {
        src: "/images/slides/slide11.jpeg",//issue
        heading: "Metal Sheet Tanks",
        link: "/products",
    },
];

export default function HeroSection() {
    return (
        <div className="hero-slider w-[80vw] h-[80vh] md:h-[600px] relative mx-auto">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full !m-0 !p-0"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="md:object-fill object-cover rounded-full"
                            />
                            {/* Transparent overlay */}

                            {/* Heading Text */}
                            <div className="absolute bottom-25 left-25 z-20 text-[#ededed] text-3xl font-semibold">
                                {slide.heading}
                            </div>
                            {/* Caption Text */}
                            {/*<div className="absolute bottom-17 left-25 z-20 text-white text-xl font-semibold">
                                {slide.caption}
                            </div>*/}
                            {/* Button */}
                            {/*<div className="absolute bottom-5 left-25 z-20 text-black bg-teal-400 p-1 pl-2 pr-2 rounded-md text-xl font-semibold">
                                <Link href={slide.link}>Explore More !</Link>
                            </div>*/}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx>{`
        /* Scoped CSS for hero slider arrows */
        .hero-slider :global(.swiper-button-next),
        .hero-slider :global(.swiper-button-prev) {
          font-size: 28px; /* Adjust icon size */
          width: 50px;
          height: 50px;
          background-color: var(--foreground); /* Background color */
          color: var(--background); /* Arrow color */
          border-radius: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease-in-out;
        }

        .hero-slider :global(.swiper-button-next:hover),
        .hero-slider :global(.swiper-button-prev:hover) {
          background-color: var(--background);
          color: var(--foreground);
        }

        .hero-slider :global(.swiper-button-next::after),
        .hero-slider :global(.swiper-button-prev::after) {
          font-size: 24px !important;
          font-weight: bold;
        }

        .hero-slider :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background-color: var(--foreground);
          opacity: 0.5;
          transition: all 0.3s ease-in-out;
        }

        .hero-slider :global(.swiper-pagination-bullet-active) {
          background-color: var(--foreground) !important;
          opacity: 1;
          width: 14px;
          height: 14px;
        }
      `}</style>
        </div>
    );
}