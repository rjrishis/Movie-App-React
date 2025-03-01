import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/templates/Trending";
import Popular from "./Components/templates/Popular";
import Movie from "./Components/templates/Movie";
import TvShows from "./Components/templates/TvShows";
import People from "./Components/templates/People";
import MovieDetail from "./Components/templates/MovieDetail";
import TvDetail from "./Components/templates/TvDetail";
import PersonDetail from "./Components/templates/PersonDetail";
import Trailer from "./Components/templates/Trailer";
import NotFound from "./NotFound";
import ContactUs from "./Components/templates/ContactUs";
import AboutUs from "./Components/templates/AboutUs";
function App() {
  return (
    <div className="bg-[#1f1e24] w-screen  text-white flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/movie/details/:id" element={<MovieDetail />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetail />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
