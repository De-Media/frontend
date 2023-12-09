import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import MetamaskLogo from "../../assets/svg/MetamaskLogo";
import Logo from "../../assets/images/full-logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await sessionStorage.setItem("wallet-address", accounts[0]);
      navigate("/");
    } catch {
      console.log("Error connecting wallet");
    }
  };

  const handleInteract = () => {
    if (typeof window.ethereum !== "undefined") {
      handleConnectWallet();
    }
  };
  return (
    <>
      <Helmet>
        <title>DeMedia | Login</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen bg-white relative">
        <button
          type="button"
          onClick={handleInteract}
          className="px-2 py-2 bg-white shadow-2xl rounded-xl md:w-1/4 w-full transform transition duration-5000 hover:scale-105"
        >
          <span className="text-xl font-bold">Login with</span>
          <MetamaskLogo />
        </button>
        <img src={Logo} alt="Logo" className="absolute bottom-10 w-36" />
      </div>
    </>
  );
};

export default LoginPage;
