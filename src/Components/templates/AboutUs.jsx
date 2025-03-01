import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <div className="pt-10">
        <Link
          className="hover:text-[#6556cd] ri-arrow-left-line  ml-10  text-3xl"
          onClick={() => navigate(-1)}
        ></Link>
    
    <div className="md:ml-[28vw] -mt-[9vh] flex flex-col items-center justify-center min-h-screen bg-[#1F1E24] text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg text-center"
      >
        About Us
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[#272636] p-8 rounded-2xl shadow-2xl w-full max-w-2xl text-center"
      >
        <p className="text-lg text-gray-300 mb-4">
          Welcome to <span className="text-[#6556CD] font-bold">Movie Explorer</span>, your go-to platform for discovering and exploring movies & TV shows. 
          Our goal is to provide you with a seamless and immersive experience to find and enjoy your favorite content.
        </p>

        <p className="text-lg text-gray-300 mb-4">
          Whether you're searching for trending films, classic hits, or hidden gems, Movie Explorer brings everything together in one place.
        </p>

        <p className="text-lg text-gray-300">
          Built with ❤️ using the latest web technologies, we strive to offer a smooth, fast, and visually appealing experience. 
          Thank you for being a part of our journey!
        </p>
      </motion.div>
    </div>
    </div>
  );
};

export default AboutUs;
