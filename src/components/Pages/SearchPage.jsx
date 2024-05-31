import React, { useState ,useEffect} from "react";
import TopSearchPageComponent from "../Navbar/TopSearchPageComponent";
import Button from "../Button";
import Breadcrumb from "../Navbar/Breadcrumb";
import { useLocation, useParams } from "react-router";

const districts = [
  "All districts",
  "1",
  "2",
  "3",
  "6",
  // Add more districts as needed
];
const venues = [
  {
    id: 1,
    name: "VIP Mansion",
    rating: 4.9,
    location: "Ho Chi Minh City",
    district:"1",
    description:
      "VIP Mansion is one of our private estate venues located in Orange County, Southern California. Now more than ever, couples like you are seeking the privacy and exclusivity of our estates, away from crowds of people, and with more flexibility and custom options available to you. We are working hard and...",
    guests: 350,
    type: "Event Rentals",
  },
  {
    id: 2,
    name: "V&E Mansion",
    rating: 4.9,
    location: "Ho Chi Minh City",
    district:"2",
    description:
      "Our one-of-a-kind VenuesandEstates.com Wedding Locations span across Southern California including Los Angeles County, Orange County, and San Diego County, as well as Palm Springs! Our elegant, grand mansions such as V&E's Historic Mansion, Breathtaking Villa, Pacific View Courtyard, & Garden Estate...",
    respondWithin: "24 hours",
    type: "Dress & Attire",
  },
  {
    id: 3,
    name: "Heal The World",
    rating: 5.0,
    location: "Ho Chi Minh City",
    district:"3",
    description:
      "Destin Wedding Company is a coastal, all-inclusive wedding business located in Destin, Florida, that offers a choice of many homes and resorts with a full-service wedding on the beach followed by a reception at a home or resort. With a team of highly...",
    reviews: 239,
    type: "Bands",
  },
  {
    id: 4,
    name: "Delicious Catering Co.",
    rating: 4.8,
    location: "Vung Tau City",
    district:"6",
    description:
      "Delicious Catering Co. offers exquisite cuisine and impeccable service for weddings and special events. Our experienced chefs craft custom menus using the freshest, locally-sourced ingredients to delight your guests.",
    reviews: 482,
    type: "Catering",
  },
  {
    id: 5,
    name: "Elegant Invitations",
    rating: 4.7,
    location: "Vung Tau",
    district:"1",
    description:
      "Elegant Invitations is a premier stationery design studio specializing in custom wedding invitations and stationery. Our team of talented designers will work with you to create a cohesive and beautiful suite that perfectly reflects your style and vision.",
    respondWithin: "48 hours",
    type: "Invitations",
  },
  {
    id: 6,
    name: "Cherished Memories Photography",
    rating: 4.9,
    location: "Da Nang",
    district:"1",
    description:
      "Cherished Memories Photography is a team of award-winning photographers dedicated to capturing the essence of your special day. With a keen eye for detail and a passion for storytelling, we strive to create timeless and beautiful images you'll treasure for a lifetime.",
    reviews: 317,
    type: "Photography",
  },
  {
    id: 7,
    name: "Harmony Strings Quartet",
    rating: 5.0,
    location: "Da Nang",
    district:"2",
    description:
      "Harmony Strings Quartet is a renowned ensemble of classical musicians offering elegant and sophisticated musical accompaniment for wedding ceremonies and receptions. With a diverse repertoire spanning from traditional to contemporary, we create a warm and inviting atmosphere for your special day.",
    reviews: 128,
    type: "Ceremony Music",
  },
  {
    id: 8,
    name: "Blooming Love Florals",
    rating: 4.8,
    location: "Da Nang",
    district:"3",
    description:
      "Blooming Love Florals is a full-service floral design studio dedicated to creating stunning and unforgettable arrangements for weddings and events. Our talented team of florists will work closely with you to bring your vision to life, using the freshest and most beautiful blooms sourced from local growers.",
    reviews: 294,
    type: "Flowers",
  },
  {
    id: 9,
    name: "Elegant Bridal Boutique",
    rating: 4.9,
    location: "Can Tho",
    district:"1",
    description:
      "Elegant Bridal Boutique is a premier destination for brides-to-be in search of the perfect wedding gown. Our carefully curated collection features designs from renowned bridal couture labels, ensuring you'll find a dress that not only looks stunning but also makes you feel truly beautiful on your special day.",
    respondWithin: "24 hours",
    type: "Dress & Attire",
  },
  {
    id: 10,
    name: "Enchanted Weddings & Events",
    rating: 4.7,
    location: "Vung Tau City",
    district:"1",
    description:
      "Enchanted Weddings & Events is a full-service wedding planning and coordination company dedicated to creating unforgettable celebrations. Our experienced team will work closely with you to bring your vision to life, handling every detail with professionalism and care, ensuring a stress-free and enjoyable experience.",
    reviews: 189,
    type: "Wedding Planning",
  },
  {
    id: 11,
    name: "Timeless Videography",
    rating: 4.8,
    location: "Vung Tau City",
    district:'1',
    description:
      "Timeless Videography is a team of talented videographers dedicated to capturing the essence of your special day. With a cinematic approach and an eye for detail, we create beautiful and emotional films that will transport you back to the moments you cherish most.",
    reviews: 273,
    type: "Videography",
  },
  {
    id: 12,
    name: "Sparkling Gems",
    rating: 4.9,
    location: "Ho Chi Minh City",
    district:'1',
    description:
      "Sparkling Gems is a premier jewelry boutique offering a stunning collection of bridal and fine jewelry. Our expert jewelers will work with you to design or select the perfect pieces to complement your style and make you feel truly radiant on your special day.",
    respondWithin: "48 hours",
    type: "Jewelry",
  },
  {
    id: 13,
    name: "Glamour Beauty Co.",
    rating: 4.8,
    location: "Ho Chi Minh City",
    district:'1',
    description:
      "Glamour Beauty Co. is a team of highly skilled and experienced hair and makeup artists dedicated to helping you look and feel your best on your wedding day. Our team will work closely with you to create a personalized look that enhances your natural beauty and complements your bridal style.",
    reviews: 412,
    type: "Hair & Makeup",
  },
  {
    id: 14,
    name: "Sweet Indulgence Cakes",
    rating: 4.9,
    location: "Vung Tau City",
    district:'1',
    description:
      "Sweet Indulgence Cakes is a boutique bakery specializing in creating beautiful and delicious custom wedding cakes. Our talented pastry chefs will work with you to design a cake that not only tastes amazing but also serves as a stunning centerpiece for your reception.",
    reviews: 298,
    type: "Cakes",
  },
  {
    id: 15,
    name: "Rhythm Nation DJs",
    rating: 4.7,
    location: "Vung Tau City",
    district:'1',
    description:
      "Rhythm Nation DJs is a team of experienced and talented DJs dedicated to keeping your dance floor packed all night long. With a vast music library spanning genres and decades, we'll work with you to create the perfect playlist that reflects your taste and keeps your guests entertained.",
    reviews: 176,
    type: "DJs",
  },
  {
    id: 16,
    name: "Elegant Event Rentals",
    rating: 4.8,
    location: "Vung Tau City",
    district:'1',
    description:
      "Elegant Event Rentals is a full-service rental company offering a wide range of high-quality event equipment and decor items. From tables and chairs to linens and lighting, our team will work with you to create a cohesive and stunning event design that brings your vision to life.",
    reviews: 342,
    type: "Event Rentals",
  },
  {
    id: 17,
    name: "Enchanted Gardens",
    rating: 4.9,
    location: "Da Nang",
    district: "4",
    description:
      "Nestled in the heart of Da Nang, Enchanted Gardens offers a breathtaking outdoor venue for your dream wedding. From the lush, manicured gardens to the serene water features, this picturesque setting provides the perfect backdrop for your special day.",
    guests: 250,
    type: "Event Rentals",
  },
  {
    id: 18,
    name: "Serenity Spa & Salon",
    rating: 4.8,
    location: "Ho Chi Minh City",
    district: "2",
    description:
      "Serenity Spa & Salon is a luxurious oasis dedicated to helping you look and feel your absolute best for your wedding day. Our team of skilled professionals will pamper you with tailored hair, makeup, and spa services, ensuring you radiate beauty and confidence.",
    respondWithin: "24 hours",
    type: "Hair & Makeup",
  },
  {
    id: 19,
    name: "Vintage Vibes Rentals",
    rating: 4.7,
    location: "Vung Tau City",
    district: "2",
    description:
      "Vintage Vibes Rentals specializes in providing unique and stylish vintage furniture and decor pieces for weddings and events. Our curated collection includes everything from antique settees to vintage barware, allowing you to create a truly one-of-a-kind and memorable celebration.",
    reviews: 112,
    type: "Event Rentals",
  },
  {
    id: 20,
    name: "River's Edge Venue",
    rating: 4.9,
    location: "Can Tho",
    district: "2",
    description:
      "Situated along the picturesque banks of the Hau River, River's Edge Venue offers a stunning waterfront setting for your dream wedding. From the expansive outdoor terrace to the elegant indoor ballroom, this versatile venue provides the perfect backdrop for celebrations of any size.",
    guests: 400,
    type: "Event Rentals",
  },
  // Add more data entries as needed
];

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
  "All locations",
  "Ho Chi Minh City",
  "Da Nang",
  "Vung Tau City",
  "Can Tho",
  // Add more locations as needed
];

const SearchPage = () => {
  const { type, location } = useParams();
  const [selectedType, setSelectedType] = useState("All types");
  const [selectedLocation, setSelectedLocation] = useState("All locations");
  const [selectedDistrict, setSelectedDistrict] = useState("All districts");
  const [selectedGuests, setSelectedGuests] = useState("");


  useEffect(() => {
    if (type) {
      setSelectedType(type);
    }
    if (location) {
      setSelectedLocation(location);
    }
    // Similarly handle other parameters like district, guests
  }, [type, location]);
  useEffect(() => {
    if (type) {
      setSelectedType(type);
    }
    // Similarly handle other parameters like district, guests
  }, [type]);

  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);

  const filteredVenues = venues.filter((venue) => {
    const hasGuestsAttribute = Object.prototype.hasOwnProperty.call(venue, 'guests');
    return (
      (selectedType === "All types" || venue.type === selectedType) &&
      (selectedLocation === "All locations" || venue.location === selectedLocation) &&
      (selectedDistrict === "All districts" || venue.district === selectedDistrict) && // Include filtering by district
      (!selectedGuests || (hasGuestsAttribute && venue.guests >= parseInt(selectedGuests, 10)))
    );
  });

  return (
    <div className="bg-white h-full pb-[200px]">

      <TopSearchPageComponent />
      <div className="max-w-7xl mx-auto   sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0 md:mr-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold mb-4">Filters</h2>
              <div className="relative mb-4">
                <button
                  className="w-full bg-gray-200 text-left py-2 px-4 rounded-lg flex items-center justify-between"
                  onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                >
                  <span>{selectedType}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${showTypeDropdown ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showTypeDropdown && (
                  <div className="absolute z-10 w-full bg-white rounded-lg shadow-md mt-2">
                    {venueTypes.map((type) => (
                      <button
                        key={type}
                        className="w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setSelectedType(type);
                          setShowTypeDropdown(false);
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative mb-4 ">
                <button
                  className="w-full bg-gray-200 text-left py-2 px-4 rounded-lg flex items-center justify-between"
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  <span>{selectedLocation}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${showLocationDropdown ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showLocationDropdown && (
                  <div className="absolute z-10 w-full bg-white rounded-lg shadow-md mt-2">
                    {locations.map((location) => (
                      <button
                        key={location}
                        className="w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setSelectedLocation(location);
                          setShowLocationDropdown(false);
                        }}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative mb-4">
                <button
                  className="w-full bg-gray-200 text-left py-2 px-4 rounded-lg flex items-center justify-between"
                  onClick={() => setShowDistrictDropdown(!showDistrictDropdown)}
                >
                  <span>{selectedDistrict}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${showDistrictDropdown ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showDistrictDropdown && (
                  <div className="absolute z-10 w-full bg-white rounded-lg shadow-md mt-2">
                    {districts.map((district) => (
                      <button
                        key={district}
                        className="w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setSelectedDistrict(district);
                          setShowDistrictDropdown(false);
                        }}
                      >
                        {district}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative">
                <input
                  type="number"
                  placeholder="Minimum guests"
                  className="w-full bg-gray-200 text-left py-2 px-4 rounded-lg mb-2"
                  value={selectedGuests}
                  onChange={(e) => setSelectedGuests(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="mb-4">
              {/* <h2 className="text-2xl font-bold text-gray-800">
                Looking for a venue with outdoor space? Yes, show me
              </h2> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {filteredVenues.map((venue) => (
                <div
                  key={venue.id}
                  className="bg-white flex flex-col rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="sm:grid-cols-2 lg:flex flex-row">
                    <div className="relative w-full rounded-lg ">
                      <img
                        src={`https://picsum.photos/id/${venue.id}/640/360`}
                        alt={venue.name}
                        className="md:w-[300px] min-h-48 md:h-56 lg:h-64  p-[30px] "
                      />
                      <div className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {venue.name}
                        </h3>
                        <div className="flex items-center mb-2">
                          {Array(Math.floor(venue.rating))
                            .fill()
                            .map((_, index) => (
                              <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          <span className="ml-2 text-gray-600">
                            {venue.rating} ({venue.reviews || ""})
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{venue.location}, Disrtict: {venue.district}</p>
                        <p className="text-gray-600 mb-4">
                          {venue.description.slice(0, 150)}...
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM9 14a3 3 0 11-6 0 3 3 0 016 0zM17 14a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="ml-2 text-gray-600">
                            {venue.guests} guests
                          </span>
                        </div>
                        <div
                          className="cursor-pointer px-4 py-2 bg-gradient-to-r from-pink-200 to-yellow-200 text-slate-400 border-2 border-l-0 border-slate-200 rounded-md  focus:outline-none focus:ring-2 focus:ring-pink-400 transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                          <Button label="Search" className="bg-gradient-to-r from-pink-200 to-yellow-200 hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredVenues.length === 0 && (
                <p className="col-span-full text-center text-gray-500">
                  No venues found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
