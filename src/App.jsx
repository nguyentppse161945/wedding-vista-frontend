import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import SearchPage from "./components/Pages/SearchPage";

const App = () => {
  return (<>
      <section
        className="w-full font-[Poppins] bg-cover bg-center md:bg-top bg-transition h-[215vh]"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/originals/52/54/24/52542461317e09454235ce54b00c2b00.jpg")',
        }}
      >
        <Navbar />
        <VendorComponent />
        <VendorCardsComponent />
        <PeekToolsComponent />
        <WeddingDressComponent />
        <IdeaAndTipsComponent />
        <ForumsComponent />
        <WebsiteComponent />
        <DestinationComponent />
        <Footer />
      </section>
      {/* <Routes>
        <Route path="/" element={<VendorComponent />} />
        <Route path="/search/:type/:location" element={<SearchPage />} />
      </Routes> */}
      </>
  );
};

export default App;
