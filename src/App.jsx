import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import ContactUsPage from "./components/Pages/ContactUsPage";
import SearchPage from "./components/Pages/SearchPage";
import ProductsPage from "./components/Pages/ProductsPage";
import About from "./components/Pages/About";
import FAQ from "./components/Pages/FAQ";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleVenueSelection = (venue) => {
    setSelectedVenue(venue);
  };

  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
  };

  const handleSearch = () => {
    if (selectedVenue && selectedLocation) {
      navigate(`/search/${selectedVenue}/${selectedLocation}`);
    } else if (selectedVenue) {
      navigate(`/search/${selectedVenue}`);
    } else {
      navigate(`/search/all`);
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route
          path="search/:venue/:location"
          element={
            <SearchPage
              selectedVenue={selectedVenue}
              selectedLocation={selectedLocation}
              handleVenueSelection={handleVenueSelection}
              handleLocationSelection={handleLocationSelection}
            />
          }
        />
        <Route
          path="/search/:venue"
          element={
            <SearchPage
              selectedVenue={selectedVenue}
              handleVenueSelection={handleVenueSelection}
            />
          }
        />{" "}
        <Route path="home" element={<Home />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductDetailsPage />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
};

export default App;
