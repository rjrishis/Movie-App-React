import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import axios from "../Utils/axios";
import HorizontalCards from "./templates/HorizontalCards";
import DropDown from "./templates/DropDown";
import Loader from "./Loader";
function Home() {
  document.title = "MovieApp || HomePage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const GetHeaderWallpaper = async() => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);
  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <div className="flex justify-between p-4">
          <h1 className="text-3xl mb-2 font-semibold text-zinc-400">
            Trending
          </h1>
          <DropDown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)} />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Home;
