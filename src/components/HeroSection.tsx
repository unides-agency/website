"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HERO_IMAGES = [
  "/unides_green.png",
  "/unides_pink.png",
];

export default function HeroSection() {
  return (
    <header
      id="hero"
      className={cn(
        "relative w-full min-h-[80vh] sm:h-[80vh] flex items-center justify-center mx-auto overflow-hidden"
      )}
    >
      {/* Swiper Background */}
      <div className="absolute inset-0 w-full h-full">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/50",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-unides-lime",
          }}
          loop={true}
          speed={1500}
          className="w-full h-full"
        >
          {HERO_IMAGES.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full bg-unides-purple">
                <Image
                  src={image}
                  alt={`Hero slide ${index + 1}`}
                  fill
                  className="object-cover opacity-30"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Centered Content */}
      <div className="absolute flex flex-col items-center justify-center z-10 px-4">
        <p
          className={cn(
            "font-jaro text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white",
            "px-4 drop-shadow-lg"
          )}
        >
          rooted in
          <span className="text-unides-lime"> culture</span>. driven by
          <span className="text-unides-lime"> purpose</span>
        </p>
      </div>
    </header>
  );
}
