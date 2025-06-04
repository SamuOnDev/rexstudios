"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import maps from "@/data/maps.json";

const featuredMaps = maps.filter((map) => map.featured);

export default function SwiperSlider() {
    return (
        <div className="relative w-full max-w-screen-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow mb-12">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="w-full h-full"
            >
                {featuredMaps.map((map, index) => (
                    <SwiperSlide key={index}>
                        <Link href={`/maps/${map.slug}`} className="relative w-full h-full block group">
                            <Image
                                src={map.image}
                                alt={typeof map.name === "string" ? map.name : map.name["en"] || "Map image"}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                            <div className="absolute bottom-8 left-8 text-white z-20">
                                <h2 className="font-heading mb-2 cursor-pointer text-xl md:text-3xl hover:scale-105 hover:font-semibold transition-all duration-200">
                                    {typeof map.name === "string" ? map.name : map.name["en"]}
                                </h2>
                            </div>
                        </Link>
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

                .swiper-button-prev:hover,
                .swiper-button-next:hover {
                    background-color: rgba(50, 120, 80, 0.85);
                    box-shadow:
                        0 4px 24px rgba(0, 0, 0, 0.5),
                        0 6px 36px rgba(0, 0, 0, 0.3);
                    border-color: #64C186;
                }

                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.6;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}
