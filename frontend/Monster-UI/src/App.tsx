import React from "react";
import { Layout, theme } from "antd";

import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";
import ContentBar from "./components/ContentBar";
import Signup from "./Container/Signup";
const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Signup />
      <FooterBar />
    </Layout>
  );
};

export default App;
