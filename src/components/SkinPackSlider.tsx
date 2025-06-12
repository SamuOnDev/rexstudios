"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { useState } from "react";

function cn(...args: (string | boolean | undefined)[]) {
    return args.filter(Boolean).join(" ");
}

interface SkinPackSliderProps {
    images: { src: string; alt: string }[];
}

export default function SkinPackSlider({ images }: SkinPackSliderProps) {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleThumbClick = (idx: number) => {
    if (swiperRef) {
      swiperRef.slideTo(idx, 200);
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto mb-12">
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow bg-black">
        <Swiper
          onSwiper={setSwiperRef}
          onSlideChange={(s) => setActiveIdx(s.activeIndex)}
          speed={200}
          className="w-full h-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
    const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const handleThumbClick = (idx: number) => {
        if (swiperRef) {
            swiperRef.slideTo(idx, 200);
        }
    };

    return (
    <div className="w-full max-w-screen-xl mx-auto mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow bg-black">
            <Swiper
                onSwiper={setSwiperRef}
                onSlideChange={(s) => setActiveIdx(s.activeIndex)}
                speed={200}
                className="w-full h-full"
            >
            {images.map((img, idx) => (
            <SwiperSlide key={idx}>
                <div className="relative w-full h-full">
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {images.map((img, idx) => (
            <button
                key={idx}
                onClick={() => handleThumbClick(idx)}
                aria-label={`Miniatura ${idx + 1}`}
                type="button"
                className={cn(
                "relative rounded-xl overflow-hidden border-2 w-20 h-12 md:w-24 md:h-16 bg-black focus:outline-none",
                activeIdx === idx ? "border-primary shadow-lg" : "border-transparent"
                )}
                style={{ transition: "border-color 0.2s" }}
            >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                  priority={idx === 0}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center gap-3 mt-4 flex-wrap">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => handleThumbClick(idx)}
            aria-label={`Miniatura ${idx + 1}`}
            type="button"
            className={cn(
              "relative rounded-xl overflow-hidden border-2 w-20 h-12 md:w-24 md:h-16 bg-black focus:outline-none",
              activeIdx === idx ? "border-primary shadow-lg" : "border-transparent"
            )}
            style={{ transition: "border-color 0.2s" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={128}
              height={72}
              className="object-cover w-full h-full"
              draggable={false}
            />
          </button>
        ))}
      </div>
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
            </button>
            ))}
        </div>
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
