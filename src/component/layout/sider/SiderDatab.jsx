import {
  AiOutlineDashboard,
  AiOutlineUnorderedList,
  AiOutlineClockCircle,
  AiFillAndroid,
} from "react-icons/ai";
import { HiOutlineUserGroup, HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlineAdd } from "react-icons/md";
import { TbBrandTelegram, TbMovie } from "react-icons/tb";
import { BsTag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiCopy, FiFlag, FiUser } from "react-icons/fi";
import { ImEarth } from "react-icons/im";
import { BiBox } from "react-icons/bi";
import { BsStackOverflow } from "react-icons/bs";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const items = [
  {
    label: <NavLink to="/">dashboard</NavLink>,
    key: "dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    label: "movies",
    key: "movies",
    icon: <HiOutlineVideoCamera />,
    children: [
      {
        label: <NavLink to="/add-movies">add movies</NavLink>,
        key: "addMovies",
        icon: <MdOutlineAdd />,
      },
      {
        label: <NavLink to="/all-movies">all movies</NavLink>,
        key: "allMovies",
        icon: <AiOutlineUnorderedList />,
      },
    ],
  },
  {
    label: <NavLink to="/">tv series</NavLink>,
    key: "series",
    icon: <TbMovie />,
    children: [
      {
        label: <NavLink to="/">add tv series</NavLink>,
        key: "addTvSeries",
        icon: <MdOutlineAdd />,
      },
      {
        label: <NavLink to="/">all tv series</NavLink>,
        key: "allTvSeries",
        icon: <AiOutlineUnorderedList />,
      },
    ],
  },
  {
    label: <NavLink to="/">tv channels</NavLink>,
    key: "channels",
    icon: <TbMovie />,
    children: [
      {
        label: <NavLink to="/">add tv channels</NavLink>,
        key: "addChannels",
        icon: <MdOutlineAdd />,
      },
      {
        label: <NavLink to="/">all tv channels</NavLink>,
        key: "allTvChannels",
        icon: <AiOutlineUnorderedList />,
      },
      {
        label: <NavLink to="/">program guide</NavLink>,
        key: "guide",
        icon: <AiOutlineClockCircle />,
      },
      {
        label: <NavLink to="/">category</NavLink>,
        key: "category",
        icon: <BsTag />,
      },
    ],
  },
  {
    label: <NavLink to="/">search & import</NavLink>,
    key: "import",
    icon: <CiSearch />,
  },
  {
    label: <NavLink to="/">movie scrapper</NavLink>,
    key: "movieScrapper",
    icon: <FiCopy />,
  },
  {
    label: <NavLink to="/">country</NavLink>,
    key: "country",
    icon: <ImEarth />,
  },
  {
    label: <NavLink to="/">genre</NavLink>,
    key: "genre",
    icon: <BiBox />,
  },
  {
    label: <NavLink to="/">slider</NavLink>,
    key: "slider",
    icon: <BsStackOverflow />,
    children: [
      {
        label: <NavLink to="/">image slider</NavLink>,
        key: "imageSlider",
        icon: <BsStackOverflow />,
      },
      {
        label: <NavLink to="/">slider setting</NavLink>,
        key: "setting",
        icon: <MdOutlineSettingsSuggest />,
      },
    ],
  },
  {
    label: <NavLink to="/">comments</NavLink>,
    key: "comments",
    icon: <FaRegComment />,
    children: [
      {
        label: <NavLink to="/">comments</NavLink>,
        key: "comments",
        icon: <FaRegComment />,
      },
      {
        label: <NavLink to="/">comments setting</NavLink>,
        key: "commentsSetting",
        icon: <MdOutlineSettingsSuggest />,
      },
    ],
  },
  {
    label: <NavLink to="/">actor & director</NavLink>,
    key: "actor&director",
    icon: <HiOutlineUserGroup />,
  },
  {
    label: <NavLink to="/">user</NavLink>,
    key: "user",
    icon: <FiUser />,
  },
  {
    label: <NavLink to="/">movie request</NavLink>,
    key: "request",
    icon: <TbBrandTelegram />,
  },
  {
    label: <NavLink to="/">report</NavLink>,
    key: "report",
    icon: <FiFlag />,
  },
  {
    label: <NavLink to="/">setting</NavLink>,
    key: "setting",
    icon: <MdOutlineSettingsSuggest />,
    children: [
      {
        label: <NavLink to="/">system setting</NavLink>,
        key: "systemSetting",
        icon: <MdOutlineSettingsSuggest />,
      },
      {
        label: <NavLink to="/">android setting</NavLink>,
        key: "androidSetting",
        icon: <AiFillAndroid />,
      },
    ],
  },
];
