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

export const items = [
  {
    label: "Dashboard",
    key: "mail",
    icon: <AiOutlineDashboard />,
  },
  {
    label: "movies",
    key: "movies",
    icon: <HiOutlineVideoCamera />,
    children: [
      {
        label: "add movies",
        key: "mail",
        icon: <MdOutlineAdd />,
      },
      {
        label: "all movies",
        key: "allmovies",
        icon: <AiOutlineUnorderedList />,
      },
    ],
  },
  {
    label: "tv series",
    key: "series",
    icon: <TbMovie />,
    children: [
      {
        label: "add tv series",
        key: "mail",
        icon: <MdOutlineAdd />,
      },
      {
        label: "all tv series",
        key: "allmovies",
        icon: <AiOutlineUnorderedList />,
      },
    ],
  },
  {
    label: "tv channels",
    key: "channels",
    icon: <TbMovie />,
    children: [
      {
        label: "add tv channels",
        key: "mail",
        icon: <MdOutlineAdd />,
      },
      {
        label: "all tv channels",
        key: "channels",
        icon: <AiOutlineUnorderedList />,
      },
      {
        label: "programe guide",
        key: "guide",
        icon: <AiOutlineClockCircle />,
      },
      {
        label: "category",
        key: "category",
        icon: <BsTag />,
      },
    ],
  },
  {
    label: "search & import",
    key: "import",
    icon: <CiSearch />,
  },
  {
    label: "MOVIE SCRAPPER",
    key: "MOVIESCRAPPER",
    icon: <FiCopy />,
  },
  {
    label: "country",
    key: "country",
    icon: <ImEarth />,
  },
  {
    label: "genre",
    key: "genre",
    icon: <BiBox />,
  },
  {
    label: "slider",
    key: "slider",
    icon: <BsStackOverflow />,
    children: [
      {
        label: "iamge slider",
        key: "slider",
        icon: <BsStackOverflow />,
      },
      {
        label: "slider setting",
        key: "setting",
        icon: <MdOutlineSettingsSuggest />,
      },
    ],
  },
  {
    label: "comments",
    key: "comments",
    icon: <FaRegComment />,
    children: [
      {
        label: "comments",
        key: "commentss",
        icon: <FaRegComment />,
      },
      {
        label: "comments setting",
        key: "commentssetting",
        icon: <MdOutlineSettingsSuggest />,
      },
    ],
  },
  {
    label: "actor & director",
    key: "actor&director",
    icon: <HiOutlineUserGroup />,
  },
  {
    label: "user",
    key: "user",
    icon: <FiUser />,
  },
  {
    label: "movie request",
    key: "request",
    icon: <TbBrandTelegram />,
  },
  {
    label: "report",
    key: "report",
    icon: <FiFlag />,
  },
  {
    label: "setting",
    key: "setting",
    icon: <MdOutlineSettingsSuggest />,
    children: [
      {
        label: "system setting",
        key: "systemsetting",
        icon: <MdOutlineSettingsSuggest />,
      },
      {
        label: "android setting",
        key: "androidSettin",
        icon: <AiFillAndroid />,
      },
    ],
  },
];
