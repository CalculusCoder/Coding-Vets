import React from "react";
import HomePage from "./HomePage";
import Layout from "@/components/global/Layout";
import Benefits from "@/components/home/Benefits";

const Home = () => {
  return (
    <Layout>
      <HomePage />
      <Benefits />
    </Layout>
  );
};

export default Home;
