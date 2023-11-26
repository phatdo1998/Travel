"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { DestinationInterface } from "@/app/interfaces";

const DestinationSwiper = ({ data }: any) => {
  const breakpoints = {
    sx: 320,
    sm: 425,
    md: 640,
    lg: 768,
    xl: 1024,
    xxl: 1280,
  };
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          [breakpoints.xxl]: {
            slidesPerView: 4,
          },
          [breakpoints.xl]: {
            slidesPerView: 3,
          },
          [breakpoints.lg]: {
            slidesPerView: 2,
          },
          [breakpoints.md]: {
            slidesPerView: 2,
          },
          [breakpoints.sm]: {
            slidesPerView: 1,
          },
          [breakpoints.sx]: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
      >
        <div className="next absolute right-0 top-1/2 z-10 bg-red-500 py-2 px-3 rounded-lg cursor-pointer -translate-y-1/2 flex justify-center items-center">
          <i className="fa-solid fa-chevron-right text-xl text-white"></i>
        </div>
        <div className="prev absolute left-0 top-1/2 z-10 bg-red-500 py-2 px-3 rounded-lg cursor-pointer text-white -translate-y-1/2 flex justify-center items-center">
          <i className="fa-solid fa-chevron-left text-xl text-white "></i>
        </div>
        {data?.map((value: DestinationInterface, index: number) => {
          return (
            <SwiperSlide key={index} className="w-full ">
              <div className=" relative cursor-pointer overflow-hidden">
                <div className="h-[300px] w-full ">
                  <Image
                    className="transition-all w-full h-full object-cover hover:scale-110"
                    src={value.image}
                    alt="slide"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="p-4 border border-gray-200 ">
                <h2 className="text-lg mb-2">{value.name}</h2>
                <div className="color-text-primary text-sm">
                  {value.listing} Listing
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default DestinationSwiper;
