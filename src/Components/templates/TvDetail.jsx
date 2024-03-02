import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { removetv } from "../../store/reducers/tvSlice";
import { asyncLoadTv } from "../../store/actions/tvActions";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import HorizontalCards from "./HorizontalCards";
// import Trailer from "./Trailer";

function tvDetail() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[210vh] px-[10%]"
    >
      <nav className="w-full text-zinc-100 h-[10vh] flex items-center gap-8 text-xl">
        <Link
          className="hover:text-[#6556cd] ri-arrow-left-line"
          onClick={() => navigate(-1)}
        ></Link>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          class="ri-earth-line"
        ></a>
        <a
          target="_blank"
          href={info.detail.homepage}
          class="ri-external-link-fill"
        ></a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDB
        </a>
      </nav>
      <div className="w-full mt-10">
        <div className="w-full flex">
          <div>
            {" "}
            <img
              className="mb-16 h-[40vh] w-[35vh] object-cover shadow-[8px_18px_38px_2px_rgba(0,0,0,0.5)]"
              src={`https://image.tmdb.org/t/p/original/${
                info.detail.poster_path || info.detail.backdrop_path
              }`}
              alt=""
            />
            <div className="loloo w-[50vh]">
              <div className="overflow-x-scroll">
                {info.watchproviders && info.watchproviders.flatrate && (
                  <div className="flex gap-x-5 items-center text-white mt-5">
                    <h1>Available on Platforms</h1>
                    {info.watchproviders.flatrate.map((w) => (
                      <img
                        className="rounded-md h-[5vh] w-[5vh] object-cover shadow-[8px_18px_38px_2px_rgba(0,0,0,0.5)]"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                        alt=""
                      />
                    ))}
                  </div>
                )}
              </div>
              <div>
                {info.watchproviders && info.watchproviders.rent && (
                  <div className="flex gap-x-5 items-center text-white mt-5">
                    <h1>Available on Rent</h1>
                    {info.watchproviders.rent.map((w) => (
                      <img
                        className="rounded-md h-[5vh] w-[5vh] object-cover shadow-[8px_18px_38px_2px_rgba(0,0,0,0.5)]"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                        alt=""
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              {info.watchproviders && info.watchproviders.buy && (
                <div className="flex gap-x-5 items-center text-white mt-5">
                  <h1>Available to Buy</h1>
                  {info.watchproviders.buy.map((w) => (
                    <img
                      className="rounded-md h-[5vh] w-[5vh] object-cover shadow-[8px_18px_38px_2px_rgba(0,0,0,0.5)]"
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                      alt=""
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-full ml-[12%]">
            <h1 className="text-white text-5xl   font-black">
              {info.detail.name ||
                info.detail.title ||
                info.detail.original_name ||
                info.detail.original_title}

              <small className="text-2xl ">
                ({info.detail.first_air_date.split("-")[0]})
              </small>
            </h1>
            <div className="relative">
              <span className=" absolute  bottom-[-40%] rounded-full text-xl font-semibold bg-yellow-400 text-white w-[6vh] h-[6vh] flex justify-center items-center">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
              <div className="ml-[6%] mt-[1%] flex gap-x-5">
                <h1 className="">User Score</h1>
                <h1>{info.detail.first_air_date}</h1>
                <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
                <h1>{info.detail.runtime}min</h1>
              </div>
            </div>
            <h1 className="mt-[2%] text-xl italic font-semibold text-zinc-200">
              {info.detail.tagline}
            </h1>
            <h1 className="text-2xl mt-5">Overview:</h1>
            <p className="">{info.detail.overview}</p>
            <h1 className="text-2xl mt-5">Translations:</h1>
            <p className="mb-10">{info.translations.join(",  ")}</p>
            <Link
              className="py-5 px-10 rounded-lg bg-[#6556cd]"
              to={`${pathname}/trailer`}
            >
              Play Trailer
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <hr className="bg-zinc-500 border-none h-[2px]" />
        <h1 className="ml-3 mt-5 text-zinc-400 text-2xl">
            Seasons:
          </h1>
        <div className="w-full h-[40vh]  flex  gap-16 overflow-x-auto overflow-y-hiddenp-3">
          {info.detail.seasons.length>0?info.detail.seasons.map((s,i)=>(
            <div className="hello flex flex-col  w-full h-[40vh]  ">
             <img 
             key={i}
             className="h-[30vh] min-w-[20vh] object-cover shadow-[8px_18px_38px_2px_rgba(0,0,0,0.5)]"
             src={`https://image.tmdb.org/t/p/original/${
               s.poster_path
             }`}
             alt=""
           />
           <h1 className= "mt-2 text-center text-lg font-bold text-white leading-none mb-2">
              {s.name || s.title || s.original_name || s.original_title}
            </h1>
            </div>
          )):<h1 className="text-3xl text-white text-center font-black">Nothing to Show here</h1>}
         
        </div>
      </div>
      <div className="mt-10">
        <hr className="bg-zinc-500 border-none h-[2px]" />
        <h1 className="ml-3 mt-5 text-zinc-400 text-2xl">
          Recommendations And Similar Stuff:
        </h1>
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default tvDetail;
