import React from "react";
import { BsFillCollectionFill } from "react-icons/bs";
import BgImage from "../../assets/bg1.jpg";
import { motion } from "framer-motion";

const bgStyle = {
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Bannerr1 = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div style={bgStyle} className="container py-24 md:py-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="font-family: var(--font-serif) text-center space-y-4 lg:max-w-[430px] mx-auto text-white">
            <h1 className="text-4xl font-bold !leading-snug">
              Ever lost a useful link? Never again
            </h1>
            <p>
              Stop searching. Start organizing. Keep all your favorite resources
              at your fingertips.
            </p>
            <a
              href="#"
              className="bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md 
             hover:bg-amber-500 transition duration-200 ease-in-out
             inline-flex items-center gap-3 group"
            >
              <span>Build Your Collection</span>
              <BsFillCollectionFill className="group-hover:animate-bounce group-hover:text-lg transition duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Bannerr1;
