import { BlogsInterface } from "@/app/interfaces";
import Image from "next/image";
import React from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";

const ListBlogs = ({ key, blog }: { key: number; blog: BlogsInterface }) => {
  return (
    <div
      key={key}
      className={` border w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-12px)] `}
    >
      <div className="h-[200px] cursor-pointer">
        <Image
          src={blog.image}
          alt="packages"
          className="object-cover w-full h-full"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-[#b3b3b3] my-5">{blog.title}</div>
        <p className="text-xl">{blog.description}</p>
        <div className="text-sm text-[#b3b3b3] mt-4">
          {blog.month} {blog.day}, {blog.year} {blog.author}
        </div>
        <div className="flex items-center gap-1 mt-3">
          <BsFillChatLeftTextFill color="#b3b3b3" size="16" />
          <p className="text-[#b3b3b3] text-sm">{blog.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ListBlogs;
