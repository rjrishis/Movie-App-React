import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import DropDown from "./DropDown";
import axios from "../../Utils/axios"
import Card from "./Cards";
import Loader from "../../Components/Loader"
import InfiniteScroll from "react-infinite-scroll-component";
const Trending = () => {
  const [category,setCategory] = useState("all");
  const [duration,setDuration] = useState("day");
  const [trending,setTrending] = useState([]);
  const [page,setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);
  document.title = "MovieApp | Trending :"+ category.toUpperCase()

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if(data.results.length > 0) {
           // setTrending(data.results);
      setTrending((prev)=>[...prev,...data.results])
      setPage(page+1);
      }
      else{
        setHasMore(false);
      }

    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = async()=>{
    if(trending.length ===0){
      GetTrending;
    }
    else{
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  }


  useEffect(()=>{
    refreshHandler();
    GetTrending();
  },[category,duration])

  const navigate = useNavigate();
  return trending.length>0 ?(
    <div className="w-screen  px-[2%]">
      <div className="w-full  h-16 flex items-center">
        <h1 className="flex  text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#6556cd] ri-arrow-left-line"
            onClick={() => navigate("/")}
          ></i>
          Trending
        </h1>
        <div className="w-[90%] flex">
          <TopNav  />
          <DropDown title="Category" options={["movie", "tv", "all"]} func={(e)=>setCategory(e.target.value)} />
          <div className="ml-4 ">
            <DropDown title="duration" options={["week", "day"] } func={(e)=>setDuration(e.target.value)}/>
          </div>
        </div>
      </div>
      <InfiniteScroll dataLength={trending.length} next={GetTrending} hasMore={hasMore} loader={<h1>Loading...</h1>}>
      <Card data={trending} title={category}/>
      </InfiniteScroll>
    </div>
  ):<Loader />
};

export default Trending;
