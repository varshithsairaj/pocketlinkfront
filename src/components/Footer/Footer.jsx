import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="px-40 py-28 bg-zinc-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
          {/* Branding Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Pocketlink</h1>
            <p className="text-gray-600">Your go-to platform for saving and organizing links effortlessly.</p>
          </div>

          {/* Quick Links Section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Resources</h1>
              <ul className="space-y-2 text-lg text-gray-600">
                <li className="cursor-pointer hover:text-primary duration-200">Blog</li>
                <li className="cursor-pointer hover:text-primary duration-200">FAQs</li>
                <li className="cursor-pointer hover:text-primary duration-200">Support</li>
                <li className="cursor-pointer hover:text-primary duration-200">Privacy Policy</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Quick Links</h1>
              <ul className="space-y-2 text-lg text-gray-600">
                <li className="cursor-pointer hover:text-primary duration-200">Home</li>
                <li className="cursor-pointer hover:text-primary duration-200">Dashboard</li>
                <li className="cursor-pointer hover:text-primary duration-200">About Us</li>
                <li className="cursor-pointer hover:text-primary duration-200">Contact Us</li>
              </ul>
            </div>
          </div>

          {/* Subscription & Social Media Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Stay Updated</h1>
            <p className="text-gray-600">Sign in to get the latest updates on new features and resources.</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-xl bg-white w-full focus:ring-0 focus:outline-none placeholder-gray-600"
              />
              <button className="bg-primary text-white font-semibold py-3 px-6 rounded-r-xl bg-amber-400 transition-all duration-500 hover:scale-105 hover:shadow-md">
                Go
              </button>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://github.com/varshithsairaj" aria-label="Github">
                <FaGithub className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/varshith_sai_raj/" aria-label="Instagram">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="mailto:pvsr27@gmail.com" aria-label="Email">
                <MdEmail className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/varshithsairaj/" aria-label="Linkedin">
                <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
