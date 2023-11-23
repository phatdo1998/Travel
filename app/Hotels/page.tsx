import Sidebar from "@/components/Sidebar";
import axios from "axios";
import React from "react";
import { TopTourInterface } from "../interfaces";
import ListTour from "@/components/ListTour";

const page = async () => {
  const getPopularHotels = () => {
    return axios.get("http://localhost:3000/api/hotels");
  };

  const dataHotels = await getPopularHotels();
  const hotels = dataHotels.data;

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url('https://preview.colorlib.com/theme/direngine/images/bg_5.jpg.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="w-full h-screen -mt-20"
      ></div>
      <div className="flex justify-center items-center">
        <div className="xxl:w-[1110px] w-full lg:flex justify-center h-full py-10 xxl:px-0 px-5 md:px-10">
          <Sidebar />
          <div className="xxl:w-[75%] w-full h-full xxl:ml-7 ml:0">
            <div className="flex flex-wrap gap-8">
              {hotels.map((hotel: TopTourInterface, index: number) => {
                return (
                  <ListTour
                    key={index}
                    name={hotel.name}
                    price={hotel.price}
                    description={hotel.description}
                    days={hotel.days}
                    nights={hotel.nights}
                    address={hotel.address}
                    rating={hotel.rating}
                    image={hotel.image}
                    star={hotel.star}
                    time={hotel.time}
                    col={3}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
