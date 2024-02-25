import React from "react";
import "./Home.scss";
import HomePage from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
const Home = () => {
  return (
    <div className="home-page">
      <HomePage />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
