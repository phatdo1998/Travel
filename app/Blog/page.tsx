import ListBlogs from "@/components/ListBlogs";
import React from "react";
import { BlogsInterface } from "../interfaces";
import axios from "axios";

const page = async () => {
  const getBlogs = () => {
    return axios.get("http://localhost:3000/api/blogs");
  };

  const dataBlogs = await getBlogs();
  const blogs = dataBlogs.data;

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url('https://preview.colorlib.com/theme/direngine/images/bg_4.jpg.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="w-screen h-screen -mt-20"
      ></div>
      <div className="flex justify-center items-center py-20">
        <div className="xxl:width-primary w-full flex justify-center items-center xxl:px-0 px-5 md:justify-start md:gap-y-6 lg:justify-between sx:flex-wrap xxl:flex-nowrap gap-y-5 gap-x-[18px]">
          {blogs.map((blog: BlogsInterface, index: number) => {
            return <ListBlogs blog={blog} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
