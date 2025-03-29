import React from "react";
import BannerPng from "../../assets/banner6.jpg";
import { RiCalendarTodoFill } from "react-icons/ri";
import { BsFillFastForwardFill } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <img
            src={BannerPng}
            alt=""
            className="w-[550px] md:max-w-[550px] object-cover drop-shadow"
          />
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold !leading-snug">
              Organize and Access Your Resources with Ease!
            </h1>
            <div className="mr-20 flex flex-col gap-6">
              <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <FaPhotoVideo className="text-2xl" />
                <p className="text-lg">Save Anything (Links, PDFs, Videos)</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <RiCalendarTodoFill className="text-2xl" />
                <p className="text-lg">
                  Organized in One Place (Custom Categories)
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <BsFillFastForwardFill className="text-2xl" />
                <p className="text-lg"> Easy Search & Quick Access</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <FaShareAlt className="text-2xl" />
                <p className="text-lg">
                  {" "}
                  Shareable Pages (Help others learn easily)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
