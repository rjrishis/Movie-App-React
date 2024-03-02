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
function Movie() {
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "MovieApp | Movie :"+ category.toUpperCase()

  const getMovie = async () => {
    try {
      const { data } = await axios.get(
        `movie/${category}?page=${page}`
      );

      if (data.results.length > 0) {
        // setMovie(data.results);
        setMovie((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = async () => {
    if (movie.length === 0) {
      getMovie;
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
    getMovie();
  }, [category]);
  return movie.length>0 ?(
    <div className="w-screen  px-[2%]">
      <div className="w-full  h-16 flex items-center">
        <h1 className="flex  text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate("/")}
          ></i>
          Movie
        </h1>
        <div className="w-[90%] flex">
          <TopNav  />
          <DropDown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e)=>setCategory(e.target.value)} />
          
        </div>
      </div>
      <InfiniteScroll dataLength={movie.length} next={getMovie} hasMore={hasMore} loader={<h1>Loading...</h1>}>
      <Card data={movie} title="movie"/>
      </InfiniteScroll>
    </div>
  ):<Loader />
}

export default Movie;
