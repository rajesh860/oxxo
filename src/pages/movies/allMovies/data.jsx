// Table-Header

import { Button, Image, Popover } from "antd";

import movieImg from "../../../assets/img/movie-img.jpg"
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";



const content = (
  <ul className="action-lists">
    <li>
      <Link to="/">
        Manage Videos
      </Link>
    </li>
    <li>
      <Link to="/">
        Edit Movie
      </Link>
    </li>
    <li>
      <Link to="/">
        Delete
      </Link>
    </li>
    <li>
      <Link to="/">
        Send Push Notification
      </Link>
    </li>
    <li>
      <Link to="/">
        Send Email Newslater
      </Link>
    </li>

  </ul>
);


export const columns = [
  {
    title: "S.No",
    dataIndex: "sNo",
    key: "sNo",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "Thumbnail",
    dataIndex: "thumbnail",
    key: "thumbnail",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },

];

// Table-data
export const data = [
  {
    key: "1",
    sNo: 1,
    action: <Popover content={content} placement="bottom" >
      <Button>.... <AiFillCaretDown /></Button>
    </Popover>,
    thumbnail: <Image src={movieImg} preview={false} alt="movie-img" />,
    name: `RRR`,
    description: `A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.`,
    status: `Published`
  },
  {
    key: "2",
    sNo: 2,
    action: <Popover content={content} placement="bottom" >
      <Button>.... <AiFillCaretDown /></Button>
    </Popover>,
    thumbnail: <Image src={movieImg} preview={false} alt="movie-img" />,
    name: `RRR`,
    description: `A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.`,
    status: `Published`
  },
  {
    key: "3",
    sNo: 3,
    action: <Popover content={content} placement="bottom" >
      <Button>.... <AiFillCaretDown /></Button>
    </Popover>,
    thumbnail: <Image src={movieImg} preview={false} alt="movie-img" />,
    name: `RRR`,
    description: `A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.`,
    status: `Published`
  },
  {
    key: "4",
    sNo: 4,
    action: <Popover content={content} placement="bottom" >
      <Button>.... <AiFillCaretDown /></Button>
    </Popover>,
    thumbnail: <Image src={movieImg} preview={false} alt="movie-img" />,
    name: `RRR`,
    description: `A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.`,
    status: `Published`
  },

];
