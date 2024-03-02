import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Loader from "../Loader";
import NotFound from "../../NotFound";
const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie")?"movie":"tv";
    const ytvideo = useSelector((state)=>state[category].info.videos)
    return  (
    <div className="absolute z-[100] left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,.9)] flex items-center justify-center">
        <Link
          className=" hover:text-[#6556cd] text-white text-2xl absolute left-[5%] top-[5%] ri-arrow-left-line"
          onClick={() => navigate(-1)}
        ></Link>
      <ReactPlayer controls height={600} width={1024} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>
    </div>
  )

};

export default Trailer;
