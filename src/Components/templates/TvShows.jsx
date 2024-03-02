import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from '../../Utils/axios'
import TopNav from "./TopNav";
import DropDown from "./DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import Card from "./Cards";
import { useNavigate } from "react-router-dom";
function TvShows() {
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "MovieApp | TvShows :"+ category.toUpperCase()

  const getTv = async () => {
    try {
      const { data } = await axios.get(
        `tv/${category}?page=${page}`
      );

      if (data.results.length > 0) {
        // setTv(data.results);
        setTv((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = async () => {
    if (tv.length === 0) {
      getTv;
    } else {
      setPage(1);
      setTv([]);
      getTv();
    }
  };

  useEffect(() => {
    refreshHandler();
    getTv();
  }, [category]);
  return tv.length>0 ?(
    <div className="w-screen  px-[2%]">
      <div className="w-full  h-16 flex items-center">
        <h1 className="flex  text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate("/")}
          ></i>
          TvShows
        </h1>
        <div className="w-[90%] flex">
          <TopNav  />
          <DropDown title="Category" options={["on_the_air","popular","top_rated","airing_today"]} func={(e)=>setCategory(e.target.value)} />
          
        </div>
      </div>
      <InfiniteScroll dataLength={tv.length} next={getTv} hasMore={hasMore} loader={<h1>Loading...</h1>}>
      <Card data={tv} title="tv"/>
      </InfiniteScroll>
    </div>
  ):<Loader />
}

export default TvShows;
