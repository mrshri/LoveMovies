import React from "react";
import "./Home.scss";
import HomePage from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
const Home = () => {
  return (
    <div className="home-page">
      <HomePage />
      <Trending />
    </div>
  );
};

export default Home;
