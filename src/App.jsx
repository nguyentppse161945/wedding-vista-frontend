import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import VendorComponent from "./components/VendorSearch/VendorComponent";
import VendorCardsComponent from "./components/VendorSearch/VendorCardsComponent";
import PeekToolsComponent from "./components/VendorSearch/PeekToolsComponent";
import Footer from "./components/Footer/Footer";
import WeddingDressComponent from "./components/VendorSearch/WeddingDressComponent";
import IdeaAndTipsComponent from "./components/VendorSearch/IdeaAndTipsComponent";
 import WebsiteComponent from "./components/VendorSearch/WebsiteComponent";
import ForumsComponent from "./components/VendorSearch/ForumsComponent";
import DestinationComponent from "./components/VendorSearch/DestinationComponent";

const App = () => {
  return (
    <section
      className=" w-full font-[Poppins] bg-cover bg-center md:bg-top bg-transition  h-[215vh]"
      style={{ backgroundImage: 'url("src/assets/dawn.png")' }}
    >
      <Navbar />


     

      <VendorComponent/>


      <VendorCardsComponent/>

      <PeekToolsComponent/>
      <WeddingDressComponent />
      <IdeaAndTipsComponent/>
       <ForumsComponent/>
       <WebsiteComponent/>
       <DestinationComponent/>
 
      <Footer/>
    </section>
  );
};

export default App;
