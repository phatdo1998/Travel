import React from "react";

const page = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url('https://preview.colorlib.com/theme/direngine/images/bg_2.jpg.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="w-screen h-screen -mt-20"
      ></div>
      <div className="flex items-center justify-center">
        <div className="xxl:width-primary w-full">
          <h1 className="text-2xl">Contact Information</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
