import React from "react";
import { Banner } from "../components/Banner";
import Gallery from "./Gallery";
import About from "./About";
import { Contact } from "../components/Contact";
import Clients from "./Clients";
import Videos from "./Videos";
import GalleryHome from "./GalleryHome";
import ClientsHome from "./ClientsHome";

function Home() {
  
  return (
    <>
      <Banner />
      <GalleryHome />
      <About />
      <Videos />
      <ClientsHome/>
      <Contact />
    </>
  );
}

export default Home;
