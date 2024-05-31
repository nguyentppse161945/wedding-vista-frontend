import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const venueTypes = [
  "All types",
  "Cartering",
  "Invitations",
  "Favors & Gifts",
  "Photography",
  "Ceremony Music",
  "Transportation",
  "Flowers",
  "Dress and Attire",
  "Wedding Planning",
  "Videography",
  "Jewelry",
  "Hairs & Makeup",
  "Cakes",
  "Djs",
  "Event Rentals",
  "Officiants",
  "Photo Booths",
  "Bands",
];

const locations = [
  "Ho Chi Minh City",
  "Vung Tau City",
  "Da Nang",
  "Can Tho",
  // Add more locations as needed
];

const SearchComponent = () => {
  const [venue, setVenue] = useState('');
  const [location, setLocation] = useState('');
  const [showVenueDropdown, setShowVenueDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (venue && location) {
      navigate(`/search/${venue}/${location}`);
    } else if (venue) {
      navigate(`/search/${venue}`);
    } else {
      navigate(`/search/all`);
    }
  };

  return (
    <div className="mt-6 h-[42px] w-full flex flex-row">
      <div className="relative w-42">
        <input
          type="text"
          placeholder="Wedding Venues"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="px-1 py-2 w-full rounded-l-md border-2 border-slate-700 focus:outline-none focus:ring-1 focus:ring-ppink-400"
          onFocus={() => {
            setShowVenueDropdown(true);
            setVenue('');
          }}
          onBlur={() => setTimeout(() => setShowVenueDropdown(false), 200)}
        />
        {showVenueDropdown && (
          <div className="absolute z-10 w-full bg-white rounded-lg shadow-md mt-1 max-h-60 overflow-auto">
            {venueTypes.filter(v => v.toLowerCase().includes(venue.toLowerCase())).map((type) => (
              <button
                key={type}
                className="w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors"
                onClick={() => {
                  setVenue(type);
                  setShowVenueDropdown(false);
                }}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="relative w-15">
        <input
          type="text"
          placeholder="Locations"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border-2 border-l-0 border-slate-700 focus:outline-none focus:ring-1 focus:ring-pink-400"
          onFocus={() => {
            setShowLocationDropdown(true);
            setLocation('');
          }}
          onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
        />
        {showLocationDropdown && (
          <div className="absolute z-10 w-full bg-white rounded-lg shadow-md mt-1 max-h-60 overflow-auto">
            {locations.filter(loc => loc.toLowerCase().includes(location.toLowerCase())).map((loc) => (
              <button
                key={loc}
                className="w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors"
                onClick={() => {
                  setLocation(loc);
                  setShowLocationDropdown(false);
                }}
              >
                {loc}
              </button>
            ))}
          </div>
        )}
      </div>
      <div
        onClick={handleSearch}
        className="w-15 h-[43px] px-4 p-2 bg-gradient-to-r from-pink-200 to-yellow-200 text-slate-400 border-2 border-l-0 border-slate-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <button label="Search" className="bg-gradient-to-r from-pink-200 to-yellow-200 hover:text-white">Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
