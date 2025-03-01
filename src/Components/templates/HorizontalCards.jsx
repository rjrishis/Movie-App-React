import React from "react";
import { Link, useNavigate } from "react-router-dom";
import noimage from "../../../public/noimage.svg";

function HorizontalCards({ data = [] }) {
  const navigate = useNavigate();

  const handleClick = (d) => {
    navigate(`/${d.media_type}/details/${d.id}`);
  };

  console.log(data); // Debugging

  return (
    <div className="w-full max-h-[40vh] flex overflow-x-auto p-3">
      {data.length > 0 ? (
        data.map((d) => (
          <div 
            key={d.id} 
            className="cursor-pointer min-w-[15%] mr-5 bg-zinc-900" 
            onClick={() => handleClick(d)}
          >
            <img
              className="w-full h-[40%] mb-2"
              src={
                d?.backdrop_path || d?.poster_path
                  ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`
                  : noimage
              }
              alt={d?.title || d?.name || "No Image"}
            />
            <div>
              <h1 className="text-md font-bold text-white leading-none mb-2">
                {d?.name || d?.title || d?.original_name || d?.original_title || "Untitled"}
              </h1>
              <p className="mt-1 text-sm text-white mb-3">
                {d?.overview ? d.overview.slice(0, 70) : "No description available"}...
                <span className="text-blue-400">more</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-3xl text-white text-center font-black">
          Nothing to Show Here
        </h1>
      )}
    </div>
  );
}

export default HorizontalCards;
