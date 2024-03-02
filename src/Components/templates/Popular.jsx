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
function Popular() {
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "MovieApp | Popular :"+ category.toUpperCase()

  const getPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );

      if (data.results.length > 0) {
        // setPopular(data.results);
        setPopular((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = async () => {
    if (popular.length === 0) {
      getPopular;
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
    getPopular();
  }, [category]);
  return popular.length>0 ?(
    <div className="w-screen  px-[2%]">
      <div className="w-full  h-16 flex items-center">
        <h1 className="flex  text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate("/")}
          ></i>
          Popular
        </h1>
        <div className="w-[90%] flex">
          <TopNav  />
          <DropDown title="Category" options={["tv","movie"]} func={(e)=>setCategory(e.target.value)} />
          
        </div>
      </div>
      <InfiniteScroll dataLength={popular.length} next={getPopular} hasMore={hasMore} loader={<h1>Loading...</h1>}>
      <Card data={popular} title={category}/>
      </InfiniteScroll>
    </div>
  ):<Loader />
}

export default Popular;
