import DateTourFrom from "@/components/DateTourFrom";
import DateTourTo from "@/components/DateTourTo";
import InputRangeTour from "@/components/InputRangeTour";
import SelectTour from "@/components/SelectTour";
import { Input } from "antd";

import CheckboxTour from "@/components/CheckboxTour";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className=" lg:w-[25%] w-full mb-10">
      <div className="bg-[#f8faff] p-5 border border-[#e6e6e6]">
        <h1 className="text-lg mb-5">FIND CITY</h1>
        <Input
          type="text"
          placeholder="Destination, City"
          className="py-[13px] rounded-md text-base mb-4"
        />
        <SelectTour />
        <DateTourFrom />
        <DateTourTo />

        <InputRangeTour />
        <button className="bg-[#f85959] w-full py-4 mt-4 hover:bg-white border border-[#f85959]">
          <div className="text-center text-white hover:text-[#f85959]">
            Search
          </div>
        </button>
      </div>
      <div className="bg-[#f8faff] p-5 mt-10 border border-[#e6e6e6]">
        <h1 className="text-lg mb-5">STAR RATING</h1>
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-2">
            <CheckboxTour />
            {[1, 2, 3, 4, 5].map((star, index) => {
              return <IoIosStar key={index} size="16" color="#f85959" />;
            })}
          </div>
          <div className="flex items-center space-x-2">
            <CheckboxTour />
            {[1, 2, 3, 4].map((star, index) => {
              return <IoIosStar key={index} size="16" color="#f85959" />;
            })}
            <IoIosStarOutline size="16" color="#f85959" />
          </div>
          <div className="flex items-center space-x-2">
            <CheckboxTour />
            {[1, 2, 3].map((star, index) => {
              return <IoIosStar key={index} size="16" color="#f85959" />;
            })}
            <IoIosStarOutline size="16" color="#f85959" />
            <IoIosStarOutline size="16" color="#f85959" />
          </div>
          <div className="flex items-center space-x-2">
            <CheckboxTour />
            {[1, 2].map((star, index) => {
              return <IoIosStar key={index} size="16" color="#f85959" />;
            })}
            <IoIosStarOutline size="16" color="#f85959" />
            <IoIosStarOutline size="16" color="#f85959" />
            <IoIosStarOutline size="16" color="#f85959" />
          </div>
          <div className="flex items-center space-x-2">
            <CheckboxTour />
            {[1].map((star, index) => {
              return <IoIosStar key={index} size="16" color="#f85959" />;
            })}
            <IoIosStarOutline size="16" color="#f85959" />
            <IoIosStarOutline size="16" color="#f85959" />
            <IoIosStarOutline size="16" color="#f85959" />
            <IoIosStarOutline size="16" color="#f85959" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
