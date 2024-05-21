import { FaListOl } from "react-icons/fa";
import { FaChair } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineSavings } from "react-icons/md";
import { PiLetterCircleVFill } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";


export const links = [
  {
    name: "PLANNING TOOLS",
    submenu: true,
    sublinks: [
      {
        Head: "Organize with ease",
        sublink: [
          { name: "Check List", link: "/", icon: <GoChecklist /> },
          { name: "Seating Chart", link: "/", icon: <FaChair /> },
          { name: "Wedding Vendor", link: "/", icon: <GrUserManager />  },
          { name: "Guests", link: "/", icon: <FaAddressBook />},
          { name: "Budget", link: "/", icon: <MdOutlineSavings /> },
        ],
      },
      {
        Head: "Personalize your wedding",
        sublink: [
          { name: "Hotel Blocks", link: "/" },
          { name: "Date Finder", link: "/" },
          { name: "Cost Guide", link: "/" },
          { name: "Color Generator", link: "/" },
          
        ],
      },
      {
        Head: "Get the WeddingWire app",
        sublink: [
          { name2: "Plan your Wedding whenever and where ever with WeddingVista App", link: "/", icon2: <PiLetterCircleVFill/> },
         
        ],
      },

      {
        Head: "Wedding guests",
        sublink: [
          { name2: "Share with your guest to collect your wedding photos", link: "/" ,icon2: <IoMdPersonAdd/>},
        
        ],
      },
      // {
      //   Head: "footwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },
    ],
  },
  {
    name: "VENUES",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "Barns & farms", link: "/" ,sideBanner:''},
          { name: "Hotels", link: "/" },
          { name: "Country clubs", link: "/" },
          { name: "Restaurants", link: "/" },
          { name: "Gardens", link: "/" },
          { name: "Mansions", link: "/" },
          { name: "Museums", link: "/" },
    
        ],
      },
      // {
      //   Head: "Bottomwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },
      // {
      //   Head: "innerwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },

      // {
      //   Head: "sleepwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },
      // // {
      // //   Head: "footwear",
      // //   sublink: [
      // //     { name: "T-shirt", link: "/" },
      // //     { name: "Casual shirts", link: "/" },
      // //     { name: "formal shirts", link: "/" },
      // //     { name: "formal shirts", link: "/" },
      // //     { name: "formal shirts", link: "/" },
      // //   ],
      // // },
    ],
  },
  {
    name: "VENDORS",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      // {
      //   Head: "footwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },
    ],
  },
  {
    name: "IDEAS",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      // {
      //   Head: "footwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },
    ],
  },
  {
    name: "INVITATIONS",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      // {
      //   Head: "footwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },
    ],
  },
  {
    name: "MORE",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      // {
      //   Head: "footwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },
    ],
  },
];
