import { TopTourInterface } from "@/app/interfaces";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsMap } from "react-icons/bs";

const ListTour = ({
  name,
  price,
  rating,
  description,
  days,
  nights,
  address,
  image,
  star,
  time,
  col,
}: TopTourInterface) => {
  return (
    <div
      className={` border  ${
        col === 4 ? "xxl:w-1/4" : "xxl:w-1/5"
      } w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-12px)] `}
    >
      <div className="h-[200px] cursor-pointer">
        <Image
          src={image}
          alt="packages"
          className="object-cover w-full h-full"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center ">
          <div className="text-lg">{name}</div>
          <div className="text-lg text-[#2F89FC]">$ {price}</div>
        </div>
        <div className="flex items-center space-x-2 my-3">
          <AiFillStar color="red" size="14" />
          <AiFillStar color="red" size="14" />
          <AiFillStar color="red" size="14" />
          <AiFillStar color="red" size="14" />
          <span className="text-xs">{rating} Rating</span>
        </div>
        <p className={`text-[#4d4d4d] text-sm ${time ? "" : "my-3"}`}>
          {description}
        </p>
        {time && (
          <div className="text-sm text-[#4d4d4d] my-3">
            {days} days {nights} nights
          </div>
        )}

        <div className="flex justify-between items-center border-t border-grayl-100 pt-[10px]">
          <div className="flex items-center space-x-1">
            <BsMap />
            <div className="text-sm text-[#4d4d4d]">{address}</div>
          </div>
          <button className="bg-[#8bc34a] rounded-[4px] text-white text-sm p-1 cursor-pointer">
            <div className="">Discover</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListTour;
