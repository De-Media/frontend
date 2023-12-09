import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <Layout>
      <Helmet>
        <title>DeMedia | Home</title>
      </Helmet>
      <h1>HomePage</h1>
    </Layout>
  );
};

export default HomePage;
