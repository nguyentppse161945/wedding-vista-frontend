import { FaListOl } from "react-icons/fa";
import { FaChair } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineSavings } from "react-icons/md";
import { PiHairDryerLight, PiLetterCircleVFill } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { BsMusicPlayer } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { GiButterflyFlower } from "react-icons/gi";





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
          { name: "Barns & farms", link: "/" },
          { name: "Hotels", link: "/" },
          { name: "Country clubs", link: "/" },
          { name: "Restaurants", link: "/" },
          { name: "Gardens", link: "/" },
          { name: "Mansions", link: "/",sideBanner:'src/assets/dinhdoclap.png' },
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
        Head: "Start hiring your vendors",
        sublink: [
          { name: "Photography", link: "/", icon: <IoCameraOutline /> },
          { name: "Wedding Planning", link: "/", icon: <CiViewList /> },
          { name: "Video Graphy", link: "/", icon: <CiVideoOn /> },
          { name: "DJs", link: "/", icon: <BsMusicPlayer /> },
          { name: "Cartering", link: "/", icon: <BiFoodMenu /> },
          { name: "Hair and Makeup", link: "/", icon: <PiHairDryerLight  /> },
          { name: "Flowers", link: "/", icon: <GiButterflyFlower  /> },
          
        ],
      },
      {
        Head: "Complete your wedding team",
        sublink: [
          { name: "Event rental", link: "/" },
          { name: "Photo Booths", link: "/" },
          { name: "Bands", link: "/" },
          { name: "Dresses and Attier", link: "/" },
          { name: "Cakes", link: "/" },
          { name: "Transportations", link: "/" },
          { name: "Ceremony Music", link: "/" },
          { name: "Lighting and Decor", link: "/" },
          { name: "Invitation", link: "/" },
          // { name: "Cakes", link: "/" },
          // { name: "Cakes", link: "/" },
        ],
      },
      {
        Head: "Destination Wedding",
        sublink: [
          { name: "Easily plan your wedding location.", link: "/" },
          // { name: "Casual shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "Couple's Choices Awards",
        sublink: [
          { name: "Check out this year's best lcoal pros , rated by couple like you", link: "/" },
          // { name: "Casual shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
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
        Head: "Get Wedding inspiration",
        sublink: [
          { name: "Planning Basics", link: "/" },
          { name: "Wedding Ceremony", link: "/" },
          { name: "Wedding Reception", link: "/" },
          { name: "Wedding Services", link: "/" },
          { name: "Wedding Fashion", link: "/" },
        ],
      },
      {
        Head: "",
        sublink: [
          { name: "Hairs & Makeup", link: "/" },
          { name: "Destination Wedding", link: "/" },
          { name: "Married Life", link: "/" },
          { name: "Event Parties", link: "/" },
          { name: "Family and Friends", link: "/" },
        ],
      },
      {
        Head: "Real Wedding",
        sublink: [
          { name: "Find wedding inspiration that fits your style with photos  from real couple.", link: "/", image:"https://www.weddingwire.com/assets/img/components/header/tabs/realweddings_banner.jpg" },
          // { name: "Casual shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "Honey Moon",
        sublink: [
          { name: "Sit back and relax with travel info + exclusive ideals for the hottest honeymoon desinations", link: "/", image:"https://www.weddingwire.com/assets/img/components/header/tabs/honeymoons_banner.jpg" },

          // { name: "Casual shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
          // { name: "formal shirts", link: "/" },
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
        Head: "Shop by category",
        sublink: [
          { name: "Wedding Invitations", link: "/" },
          { name: "Save the dates", link: "/" },
          { name: "Changes the date", link: "/" },
          { name: "Ceremony and Reception", link: "/" },
          { name: "Thank you's", link: "/" },
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
      {
        Head: "Shop designed by Style",
        sublink: [
          { name: "Floral", link: "/",image:"https://www.weddingwire.com/assets/img/components/header/tabs/honeymoons_banner.jpg" },
          { name: "Classic", link: "/",image:"https://www.weddingwire.com/assets/img/components/header/tabs/honeymoons_banner.jpg" },
          { name: "Rustic", link: "/",image:"https://www.weddingwire.com/assets/img/components/header/tabs/honeymoons_banner.jpg" },
          { name: "Mordern", link: "/",image:"https://www.weddingwire.com/assets/img/components/header/tabs/honeymoons_banner.jpg" },
        ],
      },

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
    submenu: false,
    sublinks: [
      // {
      //   Head: "Topwear",
      //   sublink: [
      //     { name: "T-shirt", link: "/" },
      //     { name: "Casual shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //     { name: "formal shirts", link: "/" },
      //   ],
      // },
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
