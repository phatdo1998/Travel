import React from "react";

const TitleTour = ({
  heading,
  title,
  subTitle,
}: {
  heading: string;
  title: string;
  subTitle?: string;
}) => {
  return (
    <div className="xxl:width-primary w-full px-5 xxl:px-0">
      <div className="color-text-primary my-5 md:mt-10 md:mb-5 lg:mt-20">
        {subTitle}
      </div>
      <h1 className="text-3xl lg:mb-20 sx:mb-10 ">
        <span className="font-bold">{heading}</span> {title}
      </h1>
    </div>
  );
};

export default TitleTour;
