import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { ReactNode } from "react";

const { Content } = Layout;

interface Props {
  children: ReactNode;
  page?: string;
}

const ContentBar: React.FC = ({ children, page = "page" }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ padding: "0 48px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>{page}</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default ContentBar;
