import ListTour from "@/components/ListTour";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { TopTourInterface } from "../interfaces";

const page = async () => {
  const getTopTour = () => {
    return axios.get("http://localhost:3000/api/tours");
  };

  const dataTopTour = await getTopTour();
  const topTour = dataTopTour.data;

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url('https://preview.colorlib.com/theme/direngine/images/bg_3.jpg.webp')`,
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
              {topTour.map((tour: TopTourInterface, index: number) => {
                return (
                  <ListTour
                    key={index}
                    name={tour.name}
                    price={tour.price}
                    description={tour.description}
                    days={tour.days}
                    nights={tour.nights}
                    address={tour.address}
                    rating={tour.rating}
                    image={tour.image}
                    star={tour.star}
                    time={tour.time}
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
