import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      className="w-full h-[52vh] flex flex-col justify-end items-start p-[5%] mt-4 "
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="w-[70%] text-5xl font-black text-white">
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        <p className="w-[70%] mt-3 text-white mb-3">
          {data.overview.slice(0, 200)}...
          <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
        </p>
        <p className="text-white mb-6">
          <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
          {data.release_date || "No Inforamtion"}
          <i className="text-yellow-500 ml-5 ri-movie-2-fill"></i>{" "}
          {data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-5 bg-[#6566cd]  rounded">Watch Tailer</Link>
      </div>
      

    </div>
  );
}

export default Header;
