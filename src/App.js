import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutus from "./Components/Aboutus.js";
import Contactus from "./Components/Contactus.js";
import Gallery from "./Components/Gallery.js";
import Home from "./Components/Home.js";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Aboutus />
      <Gallery />
      <Contactus />
      <Footer />
    </>
  );
}
