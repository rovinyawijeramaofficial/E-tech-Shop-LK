// Home.js (Main Component)
import React from "react";
import useWindowSize from "../hooks/useWindowSize"; // Ensure correct path
import HomeDesktop from "../components/HomeDesktop";
import HomeMobile from "../components/HomeMobile";

const Home = () => {
  const { width } = useWindowSize(); // Get the screen width
  const breakpoint = 768; // Define breakpoint for mobile

  return (
    <>
      {width >= breakpoint ? <HomeDesktop /> : <HomeMobile />}
    </>
  );
};


export default Home;
