import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterBar: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      created using Ant Design ©{new Date().getFullYear()} Created by oykamal
    </Footer>
  );
};

export default FooterBar;
