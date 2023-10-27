import React from "react";
import { Banner } from "../components/Banner";
import Gallery from "./Gallery";
import About from "./About";
import { Contact } from "../components/Contact";
import Clients from "./Clients";
import Videos from "./Videos";

function Home() {
  
  return (
    <>
      <Banner />
      <Gallery />
      <About />
      <Clients/>
      <Videos />
      <Contact />
    </>
  );
}

export default Home;
