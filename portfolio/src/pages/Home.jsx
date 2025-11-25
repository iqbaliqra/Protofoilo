import React from "react";
import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/MyApps";
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";

const Home = () => {
  return (
    <article className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 
      sm:mx-auto w-full max-w-7xl flex flex-col gap-24 md:gap-32">
      <Hero />
      <Timeline />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
    </article>
  );
};

export default Home;
