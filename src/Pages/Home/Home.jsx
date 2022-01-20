import React from "react";
import Navbar from "../../Components/homeHeader/Navbar";
import Footer from "../../Components/homeFooter/Footer";
import Homebody from "../../Components/homeBody.jsx/Homebody";

function Home() {
  return (
    <>
      <Navbar />
      <Homebody />
      <Footer />
    </>
  );
}

export default Home;
