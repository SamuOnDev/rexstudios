"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

interface MapDetailSliderProps {
    images: { src: string; alt: string }[];
}

export default function MapDetailSlider({ images }: MapDetailSliderProps) {
    return (
        <div className="relative w-full max-w-screen-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow mb-12">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-button-prev,
                .swiper-button-next {
                    color: white;
                    background-color: rgba(30, 30, 30, 0.7);
                    border-radius: 9999px;
                    padding: 0.5rem 1rem;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
                    top: 50%;
                    transform: translateY(-50%);
                    width: 3rem;
                    height: 12rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    position: absolute;
                    border: 2px solid transparent;
                    box-sizing: border-box;
                }

                .swiper-button-prev:hover,
                .swiper-button-next:hover {
                    background-color: rgba(50, 120, 80, 0.85);
                    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5),
                        0 0 6px 2px rgba(100, 193, 134, 0.5);
                    border: 2px solid rgba(100, 193, 134, 0.7);
                    outline: none;
                }

                .swiper-button-prev::after,
                .swiper-button-next::after {
                    font-size: 2.25rem;
                }

                @media (max-width: 768px) {
                    .swiper-button-prev,
                    .swiper-button-next {
                        height: 4rem;
                        width: 2rem;
                        padding: 0.25rem 0.5rem;
                        top: 0;
                        bottom: 0;
                        margin: auto 0;
                        transform: none;
                    }

                    .swiper-button-prev::after,
                    .swiper-button-next::after {
                        font-size: 1.5rem;
                    }
                }

                .swiper-pagination-bullet {
                    background-color: rgba(255, 255, 255, 0.4);
                }

                .swiper-pagination-bullet-active {
                    background-color: white;
                    transform: scale(1.25);
                }
            `}</style>
        </div>
    );
}