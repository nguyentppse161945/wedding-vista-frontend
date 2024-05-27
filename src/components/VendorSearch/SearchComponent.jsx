import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const SearchComponent = () => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (type && location) {
      navigate(`/search/${type}/${location}`);
    }
  };

  return (
    <div className="mt-6 h-[42px] w-full flex flex-row">
      <input
        type="text"
        placeholder="Wedding Venues"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-1 py-2 w-full rounded-l-md border-2 border-slate-700 focus:outline-none focus:ring-1 focus:ring-pink-400"
      />
      <input
        type="text"
        placeholder="Locations"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-2 w-32 border-2 border-l-0 border-slate-700 focus:outline-none focus:ring-1 focus:ring-pink-400"
      />
      <div
        onClick={handleSearch}
        className="cursor-pointer px-4 py-2 bg-gradient-to-r from-pink-200 to-yellow-200 text-slate-700 border-2 border-l-0 border-slate-700 rounded-r-md hover:text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <Button label="Search" className="bg-gradient-to-r from-pink-200 to-yellow-200 hover:text-white" />
      </div>
    </div>
  );
};

export default SearchComponent;
