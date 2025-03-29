import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    path: "/dashboard", // Corrected path
  },
  {
    id: 3,
    title: "About Us",
    path: "#",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/footer",
  },
];

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <nav className="relative top-0 left-0 w-full z-50 shadow-md bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto py-4 px-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl ml-20">PocketLink</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li
                key={menu.id}
                className="relative group py-2 px-1 transition-all duration-300 border border-transparent hover:border-black rounded-md"
              >
                <button
                  onClick={() => navigate(menu.path)} // Navigate to correct path
                  className="inline-block py-2 px-3 transition-all duration-300"
                >
                  {menu.title}
                </button>
              </li>
            ))}
            <button
              className="bg-violet-500 rounded-lg px-4 py-2 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-md"
              onClick={() => navigate("/signin")} // Navigate to Signin page
            >
              Sign In
            </button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
