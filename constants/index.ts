import { RiHomeFill } from "react-icons/ri";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

export const MOBILE_NAV_ITEMS = [
  { icon: RiHomeFill, path: "home", name: "home", offset: 0 },
  { icon: BiSolidFoodMenu, path: "menu", name: "menu", offset: 0 },
  { icon: FaUsers, path: "about", name: "about", offset: -50 },
  { icon: FaEnvelope, path: "contact", name: "contact", offset: 0 },
];

export const NAV_ITEMS = [
  { path: "home", name: "home", offset: -50 },
  { path: "menu", name: "menu", offset: -50 },
  { path: "about", name: "about", offset: -150 },
  { path: "contact", name: "contact", offset: 0 },
];

export const MENU_ITEMS = [
  {
    id: "1",
    img: "/menu/item-1.png",
    title: "Stilton and pancetta penne",
    price: 23.99,
  },
  {
    id: "2",
    img: "/menu/item-2.png",
    title: "Chorizo and avocado spaghetti",
    price: 18.49,
  },
  {
    id: "3",
    img: "/menu/item-3.png",
    title: "Crayfish and black pepper toastie",
    price: 25.99,
  },
  {
    id: "4",
    img: "/menu/item-4.png",
    title: "Orange and banana cookies",
    price: 12.49,
  },
];
