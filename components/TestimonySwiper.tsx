"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Image from "next/image";
import { GuestsInterface } from "@/app/interfaces";

const TestimonySwiper = ({ guests }: any) => {
  return (
    <Swiper
      loop={true}
      className="w-full testimonial"
      slidesPerView={"auto"}
      pagination={{ dynamicBullets: true }}
      modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
      effect="Coverflow"
      // autoplay={{
      //   delay: 3000,
      // }}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
    >
      {guests.map((guest: GuestsInterface, index: number) => {
        return (
          <SwiperSlide key={index} className="pb-10">
            <div className="flex justify-center">
              <div className="h-[100px] mr-3  relative">
                <div className="bg-red-500 rounded-full w-10 h-10 flex justify-center items-center absolute right-0 -bottom-3">
                  <BiSolidQuoteLeft size="16" color="white" />
                </div>
                <Image
                  alt=""
                  width={500}
                  height={500}
                  src={guest.image}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-[80%] px-3">
                <p className="text-sm text-[#4d4d4d] leading-6">
                  {guest.description}
                </p>
                <div className="mt-12">
                  <div className="text-black text-base font-semibold">
                    Dennis Green
                  </div>
                  <p className="text-[13px] text-[#4d4d4d]">{guest.address}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonySwiper;
