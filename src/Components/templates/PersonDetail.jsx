import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { removeperson } from "../../store/reducers/personSlice";
import { asyncLoadperson } from "../../store/actions/personActions";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import HorizontalCards from "./HorizontalCards";
import DropDown from "./DropDown";
import { useState } from "react";
function PersonDetail() {
  const [category ,setCategory] = useState("movie")
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  useEffect(() => {
    dispatch(asyncLoadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  console.log(info);
  return info ? (
    <div className="w-screen px-[9%] h">
      <nav className="w-full text-zinc-100 h-[10vh] flex items-center gap-8 text-xl">
        <Link
          className="hover:text-[#6556cd] ri-arrow-left-line"
          onClick={() => navigate(-1)}
        ></Link>
        {/* <a
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
        </a> */}
      </nav>
      <div className="flex  w-full">
        <div className="w-[20%]">
          <img
            className="mb-2 h-[40vh] w-[35vh] object-cover shadow-[8px_18px_38px_2px_rgba(0,0,0,0.5)]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          <div className="text-2xl text-white gap-4 flex">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              class="ri-earth-line"
            ></a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              class="ri-facebook-box-line"
            ></a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              class="ri-instagram-line"
            ></a>
            <a
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
              class="ri-twitter-x-line"
            ></a>
          </div>
          <h1 className="text-2xl text-zinc-400 font-semibold my-2">
            Person Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For:</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Gender:</h1>
          <h1 className="text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Birthday:</h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Death Day:</h1>
          <h1 className="text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "Zinda hoon bhai"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            Place of birth:
          </h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            Also Known As:
          </h1>
          <h1 className="text-zinc-400">{info.detail.also_known_as}</h1>
        </div>
        <div className="ml-[5%] w-[80%]">
          <h1 className="text-6xl text-zinc-400 font-black my-3">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <p className="text-zinc-400 mt-3">{info.detail.biography}</p>
          <h1 className="text-xl text-zinc-400 font-semibold my-5">
            Movies & Shows
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
          <div className="w-full flex justify-between">
            <h1 className="text-xl text-zinc-400 font-semibold my-5">Acting</h1>
            <DropDown
              title="category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-16 list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700">
            {info[category + "Credits"].cast.map((c,i)=>(
              <li key={i} className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer">
                <Link to={`/${category}/details/${c.id}`} className="">
                  <span >
                    {"    "}
                    {c.name || c.title ||c.original_name || c.original_title}
                  </span>
                  <span className="block">
                    {c.character && `character name: ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default PersonDetail;
