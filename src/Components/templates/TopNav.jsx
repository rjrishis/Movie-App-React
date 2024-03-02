import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/axios";
import { useEffect } from "react";
import noimage from "../../../public/noimage.svg"
function TopNav() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const inputHandler = (e) => {
    setQuery(e.target.value);
  };
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-full relative">
      <div className="w-[50%]  h-10 mx-auto flex justify-between items-center mt-2">
        <i className="ri-search-2-line text-2xl text-zinc-400"></i>
        <input
          onChange={inputHandler}
          value={query}
          className="w-[50vw] bg-transparent outline-none border-none h-8 text-zinc-200 p-6 text-md"
          type="text"
          placeholder="Search Anything"
        />
        {query.length > 0 && (
          <i
            className="ri-close-line text-2xl text-zinc-400 "
            onClick={() => setQuery("")}
          ></i>
        )}
      </div>
      <div className="z-[999] absolute left-[25%] w-[85vh] max-h-[45vh] bg-zinc-200 mx-auto overflow-auto mt-3 ">
        {search.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] flex justify-start items-center border-b-2 border-zinc-100 p-8 "
          >
            <img
              className="w-10vh] h-[14vh] object-cover rounded mr-10 shadow-lg"
              src={s.backdrop_path || s.profile_path ?(`https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.profile_path
              }`):noimage}
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
