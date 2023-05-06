import { Avatar, Button, Dropdown, Image, Layout } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SiderBar from "../component/layout/sider/Sider";
import appLogo from "../assets/icons/logo.png"

import "./styles.scss";
import { BiUser } from "react-icons/bi";
import { AiTwotoneLock } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Content, Sider } = Layout;


  const items = [
    {
      key: '1',
      icon: <BiUser />,
      label: (
        <Link to={"/profile"}>
          Profile
        </Link>
      ),
    },
    {
      key: '2',
      icon: <AiTwotoneLock />,
      label: (
        <Link to={"/change-password"}>
          Change Password
        </Link>
      ),
    },
    {
      key: '3',
      icon: <BiUser />,
      label: (
        <Link to={"/logout"}>
          Logout
        </Link>
      ),
    },

  ];

  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "#6772e5",
          }}
        >

          <div className="navbar-data">
            <div className="left">
              <div className="logo">
                <Link to="/">
                  <Image src={appLogo} alt="app-logo" style={{ width: 100, height: "auto" }} preview={false} />
                </Link>
              </div>

              <div className="sidebar-toggle">
                <HiMenu className="icon icon-menu" />
              </div>
            </div>

            <div className="right">

              <div className="profile-sec" style={{ paddingRight: "30px" }}>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                >
                  <Button>
                    <Avatar icon={<BiUser />} />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>

        </Header>
        <Layout className="site-layout">
          <Sider
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className="sider-bar"
          >
            <SiderBar />
          </Sider>

          <Content>
            <Outlet />
          </Content>

        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
