import { Layout } from "antd";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SiderBar from "../component/layout/sider/Sider";


import AppHeader from "./layout/header/AppHeader";

import "./styles.scss";
import { useMediaQuery } from "../component/mediaQueryBreaks";

const MainLayout = () => {
  const isMobile = useMediaQuery("(max-width: 1275px)");

  console.log(isMobile);

  const [collapsed, setCollapsed] = useState(false);


  useEffect(() => {

    setCollapsed(isMobile)

  }, [isMobile])



  const { Header, Content, Sider } = Layout;

  return (
    <div>
      <Layout className="app-layout-main">

        {/* /App-header */}
        <Header className="app-layout-header">
          <AppHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        </Header>

        {/* App-Sidebar */}

        <Layout className="site-layout">
          <Sider
            collapsed={collapsed}
            className="sider-bar"
            style={{ width: "100%" }}
            width={"233px"}
          >
            <SiderBar />
          </Sider>

          {/* App-Middle-Content */}

          <Content className="app-layout-content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div >
  );
};

export default MainLayout;
