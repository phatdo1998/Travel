"use client";

import React, { useState } from "react";

const AboutComponents = () => {
  const [activeItem, setAciveItem] = useState(0);

  const data = [
    {
      heading: "What we do",
      description: [
        {
          title: "Offering Reliable Hosting",
          subTitle:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
          subTitle2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
        },
      ],
    },
    {
      heading: "Our mission",
      description: [
        {
          title: "Exceptional Web Solutions",
          subTitle:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
          subTitle2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
        },
      ],
    },
    {
      heading: "Our goal",
      description: [
        {
          title: "Help Our Customer",
          subTitle:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
          subTitle2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
        },
      ],
    },
  ];

  const handleClick = (index: number) => {
    setAciveItem(index);
  };

  return (
    <div className="w-1/2 p-12">
      <div className="flex space-x-5">
        {data.map((item, index) => {
          return (
            <button
              onClick={() => handleClick(index)}
              key={index}
              className={`flex ${
                activeItem === index
                  ? "bg-[#78d5ef] text-white"
                  : "text-[#b3b3b3] "
              }  rounded-full  text-lg py-2 px-4 `}
            >
              <div className="">{item.heading}</div>
            </button>
          );
        })}
      </div>
      {data[activeItem].description.map((des, index) => {
        return (
          <h1 key={index} className="text-2xl mt-8">
            {des.title}
          </h1>
        );
      })}

      {data[activeItem].description.map((des, index) => {
        return (
          <p key={index} className="mt-6 text-sm color-text-primary leading-6">
            {des.subTitle}
          </p>
        );
      })}
      {data[activeItem].description.map((des, index) => {
        return (
          <p key={index} className="mt-6 text-sm color-text-primary leading-6">
            {des.subTitle2}
          </p>
        );
      })}
    </div>
  );
};

export default AboutComponents;
