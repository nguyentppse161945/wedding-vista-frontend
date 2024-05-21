import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import VendorComponent from "./components/VendorSearch/VendorComponent";
import VendorCardsComponent from "./components/VendorSearch/VendorCardsComponent";
import PeekToolsComponent from "./components/VendorSearch/PeekToolsComponent";
import Footer from "./components/Footer/Footer";
import WeddingDressComponent from "./components/VendorSearch/WeddingDressComponent";

const App = () => {
  return (
    <section
      className=" w-full font-[Poppins] bg-cover bg-center md:bg-top bg-transition  h-[220vh]"
      style={{ backgroundImage: 'url("src/assets/dawn.png")' }}
    >
      <Navbar />


     

      <VendorComponent/>


      <VendorCardsComponent/>

      <PeekToolsComponent/>
      <WeddingDressComponent />
      {/* <VendorCardsComponent/>
      <VendorCardsComponent/> */}

      <Footer/>
    </section>
  );
};

export default App;
