import CountUpHome from "@/components/CountUpHome";
import DestinationSwiper from "@/components/DestinationSwiper";
import ListTour from "@/components/ListTour";
import SelectHome from "@/components/SelectHome";
import TestimonySwiper from "@/components/TestimonySwiper";
import TitleTour from "@/components/TitleTour";
import { Input } from "antd";
import axios from "axios";
import Image from "next/image";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "../scss/home.scss";
import {
  BlogsInterface,
  CertificationInterface,
  TopTourInterface,
} from "./interfaces";
import ListBlogs from "@/components/ListBlogs";

const getCertification = () => {
  return axios.get("http://localhost:3000/api/certification");
};

const getDestination = () => {
  return axios.get("http://localhost:3000/api/destination");
};

const getTopTour = () => {
  return axios.get("http://localhost:3000/api/tours");
};

const getPopularHotels = () => {
  return axios.get("http://localhost:3000/api/hotels");
};

const getTestimony = () => {
  return axios.get("http://localhost:3000/api/testimony");
};

const getRestaurants = () => {
  return axios.get("http://localhost:3000/api/restaurants");
};

const getBlogs = () => {
  return axios.get("http://localhost:3000/api/blogs");
};

const getQuantity = () => {
  return axios.get("http://localhost:3000/api/quantity");
};

export default async function Home() {
  const dataCertification = await getCertification();
  const dataDestination = await getDestination();
  const dataTopTour = await getTopTour();
  const dataHotels = await getPopularHotels();
  const dataTestimony = await getTestimony();
  const dataRestaurants = await getRestaurants();
  const dataBlogs = await getBlogs();
  const dataQuantity = await getQuantity();

  const certification = dataCertification.data;
  const destination = dataDestination.data;
  const topTour = dataTopTour.data;
  const hotels = dataHotels.data;
  const testimony = dataTestimony.data;
  const restaurants = dataRestaurants.data;
  const blogs = dataBlogs.data;
  const quantity = dataQuantity.data;

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url('https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="w-full h-screen -mt-20"
      >
        {/* header */}
        <div className="flex items-center justify-center pt-28 px-5 ">
          <div className="width-primary  flex flex-col lg:mt-20">
            <h1 className="md:text-6xl font-bold text-white sx:text-5xl">
              Explore
            </h1>
            <div className="md:text-6xl text-white mt-3  sx:text-5xl">
              your amazing city
            </div>
            <div className="md:text-xl sx:text-base text-white md:mt-16 sx:mt-4">
              Find great places to stay, eat, shop, or visit from local experts
            </div>
            <div className="flex justify-center items-center pr-5 sx:p-0 ">
              <div className="flex items-center justify-between md:mt-6 sx:mt-2 lg:p-8 bg-white sx:w-full sx:flex-col md:flex-row gap-5 sx:p-5">
                <div className="bg-white flex items-center justify-between gap-5 sx:flex-col w-full lg:flex-row">
                  <SelectHome />
                  <Input type="text" placeholder="name" className="" />
                </div>

                <div className="flex items-center gap-5 sx:flex-col sx:w-full lg:flex-row">
                  <SelectHome />
                  <div className="bg-[#f85959] flex items-center justify-center  sx:py-2 rounded-full w-[140px] text-white cursor-pointer sx:w-full">
                    <button className="">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* certification */}
      <div className="flex justify-center items-center bg-[#f8faff] pb-20 sx:pb-10 sx:pt-16 md:pt-0 ">
        <div className="xl:w-[1110px] md:w-full flex items-center justify-between -mt-10 sx:flex-col md:flex-row sx:space-y-5 md:space-y-0 sx:px-5 lg:px-5 xl:px-0 md:space-x-4 lg:space-x-0">
          {certification.map((item: CertificationInterface, index: number) => {
            return (
              <div
                key={index}
                className="p-6 flex flex-col items-center justify-center bg-white hover:bg-[#f85959] hover:text-white md:w-[250px] sx:w-full wrapper__home-icon min-h-[350px]"
              >
                <div className="h-[78px] flex justify-center items-center  text-[#f85959] home-icon">
                  <i className={`${item.icon} text-5xl`}></i>
                </div>
                <div className="text-xl font-medium text-center my-4">
                  {item.title}
                </div>
                <div className="text-base text-center mb-3">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Destination */}
      <div className="flex justify-center items-center px-5 ">
        <div className="xxl:width-primary w-full">
          <TitleTour
            heading="Featured"
            title="Destination"
            subTitle="Featured"
          />
          <div className="w-full h-full">
            <DestinationSwiper data={destination} />
          </div>
        </div>
      </div>

      {/* Top tour */}
      <div className="flex justify-center items-center bg-[#f8faff] mt-20 pb-24">
        <div className="flex justify-center items-center flex-col">
          <TitleTour
            heading={"Top"}
            title={"Tour Packages"}
            subTitle="Special Offers"
          />

          <div className="xxl:px-14 w-full flex items-center px-5 md:justify-between md:gap-y-6 lg:justify-start sx:flex-wrap xxl:flex-nowrap lg:gap-[18px] gap-y-5">
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
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* coutup */}
      <div className="w-full xxl:h-[546px] sx:h-[800px] md:h-[550px] relative">
        <div className=" w-full h-full absolute left-0 top-0 ">
          <Image
            src={"/bg_1.jpg.webp"}
            alt="bg_1"
            width={1000}
            height={1000}
            className="w-full h-full object-cover absolute left-0 top-0"
          />
          <div className=" w-full h-full absolute left-0 top-0 overlay"></div>
        </div>

        <div className="flex items-center justify-center flex-col z-20 relative">
          <div className="text-5xl text-white mt-32 text-center">
            Some fun facts
          </div>
          <div className="text-white text-sm mt-10">
            More than 100,000 websites hosted
          </div>
          <div className="flex items-center justify-center mt-20 lg:gap-x-32 md:gap-x-10 gap-y-10 flex-col md:flex-row px-5 ">
            {quantity.map(
              (fact: { number: number; title: string }, index: number) => {
                return (
                  <div key={index} className="text-white text-center text-3xl ">
                    <CountUpHome fact={fact} />
                    <p className="text-base">{fact.title}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* popularHotels */}
      <div className="flex justify-center items-center mt-20 pb-24">
        <div className="flex justify-center items-center flex-col">
          <TitleTour
            heading={"Popular"}
            title={"Hotels & Rooms"}
            subTitle="Special Offers"
          />
          <div className="xxl:px-14 w-full flex items-center px-5 md:justify-between md:gap-y-6 lg:justify-start sx:flex-wrap xxl:flex-nowrap lg:gap-[18px] gap-y-5">
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
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimony */}
      <div className="bg-[#f8faff] flex justify-center items-center pb-20 ">
        <div className="xxl:width-primary px-5 w-full flex items-center justify-between xxl:gap-x-24 md:gap-x-10 md:flex-row flex-col mt-8">
          <div className="w-full md:w-1/2">
            <p className="text-sm color-text-primary mb-4">
              Best Directory Website
            </p>
            <div className="text-3xl mb-5">
              <span className="font-bold ">Why</span> Choose Us?
            </div>
            <p className="mb-4 text-sm color-text-primary">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="text-sm color-text-primary">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life.
            </div>
            <button className="border border-[#f85959] text-base rounded-full px-6 py-4 mt-10 text-[#f85959]">
              <a href="/" className="">
                Read more
              </a>
            </button>
          </div>

          <div className="md:w-1/2 w-full">
            <p className="text-sm color-text-primary my-4">Testimony</p>
            <div className="text-3xl mb-5">
              <span className="font-bold ">Our</span> Guests Says
            </div>

            <div className="bg-white xxl:p-5 p-4 w-[500px] max-w-full">
              <TestimonySwiper guests={testimony} />
            </div>
          </div>
        </div>
      </div>

      {/* popularRestaurants */}
      <div className="flex justify-center items-center mt-20 pb-24">
        <div className="flex justify-center items-center flex-col">
          <TitleTour
            heading={"Popular"}
            title={"Restaurants"}
            subTitle="Special Offers"
          />
          <div className="xxl:width-primary w-full flex justify-center items-center xxl:px-0 px-5 md:justify-start md:gap-y-6 lg:justify-between sx:flex-wrap xxl:flex-nowrap gap-y-5 gap-x-[18px]">
            {restaurants.map((item: any, index: number) => {
              return (
                <ListTour
                  key={index}
                  name={item.name}
                  rating={item.rating}
                  address={item.address}
                  showPrice={item.showPrice}
                  image={item.image}
                  description={item.description}
                  col={4}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* blogs */}
      <div className="flex justify-center items-center mt-20 pb-24 bg-[#f8faff]">
        <div className="flex justify-center items-center flex-col">
          <TitleTour
            heading={"Tips"}
            title={"& Articles"}
            subTitle="Recent Blog"
          />
          <div className="xxl:width-primary w-full flex justify-center items-center xxl:px-0 px-5 md:justify-start md:gap-y-6 lg:justify-between sx:flex-wrap xxl:flex-nowrap gap-y-5 gap-x-[18px]">
            {blogs.map((blog: BlogsInterface, index: number) => {
              return <ListBlogs key={index} blog={blog} />;
            })}
          </div>
        </div>
      </div>

      {/* feedback */}
      <div className="flex justify-center items-center bg-gradient-to-br from-teal-400 to-green-400 h-[500px] px-3">
        <div className="xxl:width-primary w-full flex justify-center items-center">
          <div className="text-center w-[650px]">
            <h1 className="text-[40px] text-white mb-3">
              Subcribe to our Newsletter
            </h1>
            <p className="text-sm text-white">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
            <div className=" flex items-center justify-center mt-10 ">
              <div className="md:w-[420px] w-full border border-white ">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="outline-none bg-transparent py-[14px] w-[70%] border-r border-white placeholder-gray-100 text-gray-100 px-3"
                />
                <button className=" w-[30%]">
                  <div className="text-white ">Subscribe</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
