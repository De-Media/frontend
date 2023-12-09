import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Alert from "@mui/material/Alert";

const HomePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>DeMedia | Home</title>
      </Helmet>
      {/* <h1>HomePage</h1> */}
    </Layout>
  );
};

export default HomePage;
