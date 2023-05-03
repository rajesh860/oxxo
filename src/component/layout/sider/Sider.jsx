import { Menu } from "antd";
import { useState } from "react";
import { items } from "./SiderDatab";
///styles
import "./styles.scss";
const SiderBar = () => {
  const [current, setCurrent] = useState("dashboard");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        theme="ghost"
        selectedKeys={[current]}
        items={items}
        mode="inline"
        className="sider-menu"
      />
      ;
    </>
  );
};

export default SiderBar;
