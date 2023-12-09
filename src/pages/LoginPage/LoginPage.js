import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import MetamaskLogo from "../../assets/svg/MetamaskLogo";

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
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <button
          type="button"
          onClick={handleInteract}
          className="border-2 border-black px-2 py-2 bg-white rounded-xl md:w-1/4 w-full transform transition duration-5000 hover:scale-105"
        >
          <span className="text-4xl font-bold">Login with</span>
          <MetamaskLogo />
        </button>
      </div>
    </>
  );
};

export default LoginPage;
