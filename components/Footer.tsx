import React from "react";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#222831] flex-col py-20 ">
      <div className="xxl:w-[1110px] w-full flex justify-between gap-x-10 lg:gap-x-0 sx:px-5 xxl:px-0 sx:flex-col md:flex-row ">
        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row flex-1 lg:space-x-8">
          <div className="flex-1 md:h-1/2 h-full">
            <div className="text-white text-lg mb-10">dirEngine</div>
            <p className="text-white text-opacity-70 sx:mb-8 text-base lg:mb-20">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-5 rounded-full w-14 h-14 flex justify-center items-center cursor-pointer">
                <FaTwitter size="24" color="white" />
              </div>
              <div className="bg-white bg-opacity-5 rounded-full w-14 h-14 flex justify-center items-center cursor-pointer">
                <FaFacebookF size="24" color="white" />
              </div>
              <div className="bg-white bg-opacity-5 rounded-full w-14 h-14 flex justify-center items-center cursor-pointer">
                <BsInstagram size="24" color="white" />
              </div>
            </div>
          </div>
          <div className="flex-1 md:h-1/2 ">
            <div className="text-white text-lg mb-10">Information</div>
            <div className="text-white text-opacity-70 flex flex-col space-y-6 text-base">
              <div>About</div>
              <div>Service</div>
              <div>Terms and Conditions</div>
              <div>Become a partner</div>
              <div>Best Price Guarantee</div>
              <div>Privacy and Policy</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10 md:space-y-0 lg:flex-row flex-1">
          <div className="flex-1 mt-10 md:mt-0  md:h-1/2">
            <div className="text-white text-lg mb-10">Customer Support</div>
            <div className="text-white text-opacity-70 flex flex-col space-y-6 text-base">
              <div>FAQ</div>
              <div>Payment Option</div>
              <div>Booking Tips</div>
              <div>How it works</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="flex-1 text-white text-opacity-70 md:h-1/2">
            <div className="text-white text-lg mb-10">Have a Questions?</div>
            <div className="flex justify-center space-x-5 ">
              <FaMapMarkerAlt size="24" color="white" />
              <p className="text-base ">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div className="flex items-center space-x-5 my-6">
              <FaPhoneAlt size="24" color="white" />
              <p className="text-base ">+2 392 3929 210</p>
            </div>
            <div className="flex items-center space-x-5">
              <IoMdMail size="24" color="white" />
              <p className="text-base ">info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 px-5">
        <div className="text-white text-opacity-70 text-base text-center">
          Copyright ©2023 All rights reserved | This template is made with by
          Colorlib
        </div>
      </div>
    </div>
  );
};

export default Footer;
