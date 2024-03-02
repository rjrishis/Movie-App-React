import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/noimage.svg"
const Card = ({ data, title }) => {
  console.log(title);
  return (
    <div className="w-screen h-full ">
      <div className="flex items-center justify-center flex-wrap w-full">
        {data.map((c, i) => (
          <Link to={`/${c.media_type || title}/details/${c.id}`} key={i} className="relative w-[25vh] mr-[2%] mb-[2%]">
            <img 
              className="h-[35vh] object-cover shadow-[8px_18px_38px_2px_rgba(0,0,0,0.5)]"
              src={c.poster_path || c.backdrop_path || c.profile_path?`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
              }`:noimage}
              alt=""
            />
            <h1 className="text-xl text-zinc-400 font-serif mt-3 ">{c.title || c.original_name || c.original_title}</h1>
            {c.vote_average &&  <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-400 text-white w-[6vh] h-[6vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>}
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
