import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles.scss";
import SiderBar from "../component/layout/sider/Sider";
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Content, Sider } = Layout;
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
        />
        <Layout className="site-layout">
          <Sider
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className="sider-bar"
          >
            <SiderBar />
          </Sider>

          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </div>
  );
};

export default MainLayout;
