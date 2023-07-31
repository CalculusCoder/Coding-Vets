import React from "react";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import Cards from "@/components/home/Cards";
import CallToAction from "@/components/home/CallToAction";

const HomePage = () => {
  return (
    <div className="mb-10">
      <Hero />
      <Benefits />
      <Cards />
      <CallToAction />
    </div>
  );
};

export default HomePage;
