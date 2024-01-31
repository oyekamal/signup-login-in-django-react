import React from "react";
import { Layout, theme } from "antd";

import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";
import ContentBar from "./components/ContentBar";

const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <ContentBar />
      <FooterBar />
    </Layout>
  );
};

export default App;
