import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../../assets/banner.png";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    
    <section className="bg-white  overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] bg-[#f5f3eb] ">
        {/* Brand Info */}
        <div className="ml-40 flex flex-col justify-center py-14 md:py-0 relative z-20">
  <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
    <motion.h1
      variants={FadeUp(0.6)}
      initial="initial"
      animate="animate"
      className="text-3xl lg:text-5xl font-bold !leading-snug"
    >
      All Your <span className=" text-violet-500">Learning Resources</span> in One Place.
      {/* <p className="text-base font-normal">
  Save, organize, and share your favorite videos, posts, PDFs, and notes effortlessly. No more searching across multiple platforms.
</p>
<p className="font-bold text-base">
  Everything is accessible in one click!
</p> */}

            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn bg-amber-500 rounded-lg px-6 py-3 text-white font-bold text-xl w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-md">
  Start Organizing
</button>

            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center mr-25">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={Banner}
            alt=""
            className="w-[400px] xl:w-[550px] relative z-10 drop-shadow"
          />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;