import AboutComponents from "@/components/AboutComponents";
import TitleTour from "@/components/TitleTour";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    {
      heading: "What we do",
      description: [
        {
          title: "Offering Reliable Hosting",
          subTitle:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
        },
      ],
    },
    {
      heading: "Our mission",
      description: [
        {
          title: "Exceptional Web Solutions",
          subTitle:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur.",
        },
      ],
    },
    {
      heading: "Our goal",
      description: [
        {
          title: "Help Our Customer",
          subTitle:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur.",
        },
      ],
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://preview.colorlib.com/theme/direngine/images/bg_2.jpg.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="w-full h-screen -mt-20"
      ></div>
      <div className="flex justify-center items-center flex-col">
        <div className="xxl:width-primary w-full flex justify-center py-10">
          <div className="h-[435px] w-1/2 ">
            <Image
              src={"/about.jpg.webp"}
              alt="about"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <AboutComponents />
        </div>
        <div className="bg-[#f8faff] w-full flex justify-center">
          <TitleTour
            subTitle="FAQS"
            heading="Frequently"
            title="Ask Question"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
