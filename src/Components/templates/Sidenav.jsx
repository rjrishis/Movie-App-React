import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-8">
      <h1 className="text-2xl font-bold text-white">
        <i className="text-[#6556cd] ri-tv-fill m-2"></i>
        <span className="text-xl">RSMDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap2">
        <h1 className="text-white font-semibold text-md ml-2 mt-6 mb-2">
          New Feeds
        </h1>
        <Link to="/trending" className="p-5 hover:bg-[#6556cd] text-sm hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link to="/popular" className="p-5 hover:bg-[#6556cd] text-sm hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link to="/movie" className="p-5 hover:bg-[#6556cd] text-sm hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-clapperboard-fill"></i>
          Movies
        </Link>

        <Link to="/tv" className="p-5 hover:bg-[#6556cd] text-sm hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-movie-fill"></i>
          Tv Shows
        </Link>

        <Link to="/people" className="p-5 hover:bg-[#6556cd] text-sm hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap2">
        <h1 className="text-white font-semibold text-md ml-2 mt-6 mb-2">
          Website Information
        </h1>
        <Link to={"/about-us"} className="p-5 hover:bg-[#6556cd] text-sm hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-information-2-fill"></i>
          About
        </Link>
        <Link to={"/contact-us"} className="p-5 hover:bg-[#6556cd] text-sm hover:text-white duration-300 rounded-lg">
          <i className="mr-2 ri-contacts-book-2-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
