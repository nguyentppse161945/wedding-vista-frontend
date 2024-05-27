import React from 'react';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
  const { type, location } = useParams();

  // Fake data
  const data = [
    { id: 1, name: 'Venue A', location: 'City A' },
    { id: 2, name: 'Venue B', location: 'City B' },
    // Add more fake data as needed
  ];

  const filteredData = data.filter(
    item => item.name.toLowerCase().includes(type.toLowerCase()) && item.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Results for "{type}" in "{location}"</h1>
      <ul className="mt-4">
        {filteredData.map(item => (
          <li key={item.id} className="p-2 border-b border-gray-200">
            {item.name} - {item.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
