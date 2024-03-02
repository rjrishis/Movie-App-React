import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from '../../Utils/axios'
import TopNav from "./TopNav";
// import DropDown from "./DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import Card from "./Cards";
import { useNavigate } from "react-router-dom";
function People() {
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "MovieApp | People :"+ category.toUpperCase()

  const getPeople = async () => {
    try {
      const { data } = await axios.get(
        `person/${category}?page=${page}`
      );

      if (data.results.length > 0) {
        // setPeople(data.results);
        setPeople((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = async () => {
    if (people.length === 0) {
      getPeople;
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
    getPeople();
  }, [category]);
  return people.length>0 ?(
    <div className="w-screen  px-[2%]">
      <div className="w-full  h-16 flex items-center">
        <h1 className="flex  text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate("/")}
          ></i>
          People
        </h1>
        <div className="w-[90%] flex">
          <TopNav  />
          {/* <DropDown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e)=>setCategory(e.target.value)} /> */}
          
        </div>
      </div>
      <InfiniteScroll dataLength={people.length} next={getPeople} hasMore={hasMore} loader={<h1>Loading...</h1>}>
      <Card data={people} title="person"/>
      </InfiniteScroll>
    </div>
  ):<Loader />
}

export default People;
