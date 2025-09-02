import { LatLngTuple } from "leaflet";
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

export const MARKERS: {
  id: number | string;
  position: LatLngTuple;
  title: string;
  subtitle: string;
  image: string;
}[] = [
  {
    id: 1,
    position: [34.052235, -118.243683],
    title: "W’Food Downtown",
    subtitle: "Our flagship restaurant in the heart of Los Angeles.",
    image: "/map/1.png",
  },
  {
    id: "2",
    position: [33.9748, -118.3356],
    title: "W’Food Westside",
    subtitle: "Casual dining spot near the beach with fresh seasonal menus.",
    image: "/map/2.png",
  },
  {
    id: "3",
    position: [34.0211, -118.3965],
    title: "W’Food Beverly",
    subtitle: "Fine dining experience with a focus on wine pairing.",
    image: "/map/3.png",
  },
];

export const SOCIAL_ITEMS = [
  { name: "Youtube", path: "https://www.youtube.com" },
  { name: "Facebook", path: "https://www.facebook.com" },
  { name: "Instagram", path: "https://www.instagram.com" },
];

export const BLOGNAV_ITEMS = [
  {
    id: "1",
    path: "/",
    title: "Discover healthy dinner ideas with fresh seasonal ingredients",
  },
  {
    id: "2",
    path: "/",
    title: "Explore simple cooking tips for quick and delicious family meals",
  },
  {
    id: "3",
    path: "/",
    title: "Learn how to pair food and wine for unforgettable dining moments",
  },
  {
    id: "4",
    path: "/",
    title: "Find restaurant trends and recipes that inspire your next kitchen",
  },
];

export const NEWSNAV_DATA = [
  {
    id: "1",
    path: "/",
    title: "W’Food introduces new seasonal menu with fresh local flavors",
  },
  {
    id: "2",
    path: "/",
    title: "Chef’s special: discover the story behind our signature dishes",
  },
  {
    id: "3",
    path: "/",
    title: "Healthy dining tips: how to enjoy tasty meals without guilt",
  },
  {
    id: "4",
    path: "/",
    title: "Restaurant trends 2025: sustainability and flavor innovation",
  },
];
