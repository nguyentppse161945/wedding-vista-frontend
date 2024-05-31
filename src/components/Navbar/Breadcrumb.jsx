import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="bg-transparent">
      <ul className="flex flex-wrap space-x-2 p-2 rounded-md bg-white ">
        <li>
          <Link
            to="/"
            className={`cursor-pointer hover:bg-[#E8DAEF] p-2 rounded-md ${
              location.pathname === "/home" && "bg-[#b572d6] text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            to="/search/wedding-venues/locations"
            className={`cursor-pointer hover:bg-[#E8DAEF] p-2 rounded-md ${
              location.pathname === "/search/wedding-venues/locations" && "bg-[#b572d6] text-white"
            }`}
          >
            Wedding Venues
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            to="#"
            className={`cursor-pointer hover:bg-[#E8DAEF] p-2 rounded-md ${
              location.pathname === "/about" && "bg-[#b572d6] text-white"
            }`}
          >
            About
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            to="#"
            className={`cursor-pointer hover:bg-[#E8DAEF] p-2 rounded-md ${
              location.pathname === "/faq" && "bg-[#b572d6] text-white"
            }`}
          >
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
}
