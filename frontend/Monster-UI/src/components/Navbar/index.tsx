import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const items = new Array(4).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const Navbar: React.FC = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={[
          { key: 1, label: `Sign up` },
          { key: 2, label: `Login` },
        ]}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default Navbar;
