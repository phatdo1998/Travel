"use client";

import React, { useState } from "react";
import { Slider } from "antd";
import "../scss/hotel.scss";

const InputRangeTour = () => {
  const [priceRangeFrom, setPriceRangeFrom] = useState(1000);
  const [priceRangeTo, setPriceRangeTo] = useState(12000);

  const handleSliderChange = (value: any) => {
    setPriceRangeFrom(value[0]);
    setPriceRangeTo(value[1]);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full mt-4">
        <div className="flex justify-between items-center w-[80%] px-5">
          <span>{priceRangeFrom}</span>
          <span className="">-</span>
          <span className="">{priceRangeTo}</span>
        </div>
      </div>
      <div className="">
        <Slider
          range={{ draggableTrack: true }}
          defaultValue={[0, 100]}
          onChange={(value: any) => handleSliderChange(value)}
          min={1000}
          max={12000}
          step={1}
        />
      </div>
    </>
  );
};

export default InputRangeTour;
