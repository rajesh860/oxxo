import { AiFillStar } from "react-icons/ai";
import {
  BsBox2Fill,
  BsFillCameraVideoFill,
  BsFillFlagFill,
} from "react-icons/bs";
import { FaTv, FaUsers } from "react-icons/fa";

// WidgetCards;

export const widgetCards = [
  {
    Icon: BsFillCameraVideoFill,
    title: `movies`,
    subTitle: `${289}`,
    colorClassBg: `primary`,
  },
  {
    Icon: BsFillCameraVideoFill,
    title: `tv-series`,
    subTitle: `${289}`,
    colorClassBg: `info`,
  },
  {
    Icon: FaTv,
    title: `movies`,
    subTitle: `${289}`,
    colorClassBg: `warning`,
  },
  {
    Icon: AiFillStar,
    title: `movies`,
    subTitle: `${289}`,
    colorClassBg: `danger`,
  },

  {
    Icon: BsFillFlagFill,
    title: `countries`,
    subTitle: `${289}`,
    colorClassIcon: `changeBg`,
    colorClassBg: `primary`,
  },
  {
    Icon: BsBox2Fill,
    title: `genre`,
    subTitle: `${289}`,
    colorClassIcon: `changeBg`,
    colorClassBg: `info`,
  },
  {
    Icon: BsFillCameraVideoFill,
    title: `unpublished movies`,
    subTitle: `${289}`,
    colorClassIcon: `changeBg`,
    colorClassBg: `warning`,
  },
  {
    Icon: FaUsers,
    title: `users`,
    subTitle: `${289}`,
    colorClassIcon: `changeBg`,
    colorClassBg: `danger`,
  },
];

// export const panelData = [
//   {
//     heading: `MOST POPULAR MOVIES`,
//     titles: [`The Stand In`, `The Vow`, `Half Brothers`, `Alive`, `Locked Up`],
//     releases: [
//       `2020-12-03`,
//       `2020-08-23`,
//       `2020-12-04`,
//       `2018-11-23`,
//       `2015-04-20`,
//     ],
//     totalViews: [`11797`, `8526`, `5801`, `3959`, `3959`],
//   },
// ];

// Panel-Cards-Data

export const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",

  },
  {
    title: "Release",
    dataIndex: "release",
    key: "release",
  },
  {
    title: "Total View",
    dataIndex: "totalView",
    key: "totalView",
  },
];



export const data = [
  {
    key: "1",
    title: "The Stand In",
    release: "2020-12-03",
    totalView: "11797"
  },
  {
    key: "2",
    title: "The Stand In",
    release: "2020-12-03",
    totalView: "11797"
  },
  {
    key: "3",
    title: "The Stand In",
    release: "2020-12-03",
    totalView: "11797"
  },
  {
    key: "4",
    title: "The Stand In",
    release: "2020-12-03",
    totalView: "11797"
  },
  {
    key: "5",
    title: "The Stand In",
    release: "2020-12-03",
    totalView: "11797"
  },


];
