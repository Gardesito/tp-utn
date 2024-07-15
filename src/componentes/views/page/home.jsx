import { Routes, Route } from "react-router-dom";
import Head from "../partials/head";
import Body from "../partials/body";
import Footer from "../partials/footer";
import Hero from "../partials/hero";
import Carrusel from "../partials/carrusel";
import { Contact } from "./contact";

const Home = () => {
  return (
    <>
      <Head />
      <Hero />
      <Carrusel />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
