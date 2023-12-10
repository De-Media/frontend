import React, { useEffect, useState } from "react";
// import { LogInWithAnonAadhaar, useAnonAadhaar } from 'anon-aadhaar-react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/full-logo.png";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Modal from "../Modal";
import MetamaskLogo from "../../assets/svg/MetamaskLogo";

const loginSteps = [
  { id: 1, title: "Metamask" },
  { id: 2, title: "Login" },
  { id: 3, title: "Done" },
];

const Header = () => {
  const navigate = useNavigate();
  // const [anonAadhaar] = useAnonAadhaar();

  const { signOut, isAuthenticated } = useAuth();

  const [address, setaddress] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginStep, setLoginStep] = useState(1);

  // useEffect(() => {
  //   anonAadhaar.status === "logged-in"
  //     ? sessionStorage.setItem("anon-aadhaar-status", "logged-in")
  //     : sessionStorage.setItem("anon-aadhaar-status", "logged-out");
  // }, [anonAadhaar]);

  useEffect(() => {
    setaddress(sessionStorage.getItem("wallet-address"));
  }, [isAuthenticated]);

  const handleOpenProfilePage = () => {
    navigate("/profile");
  };
  const handleSignout = () => {
    signOut();
  };

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

  const handleConnectWalletClick = () => {
    if (typeof window.ethereum !== "undefined") {
      handleConnectWallet();
    }
  };

  const handleAnonAuthClick = () => {
    console.log("Anon Aadhaar");
  };

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setLoginStep(2);
    }
  }, [isAuthenticated]);

  const profileLinks = [
    {
      id: 1,
      title: "Profile",
      onClick: handleOpenProfilePage,
    },
    {
      id: 2,
      title: "Disconnect",
      onClick: handleSignout,
    },
  ];

  return (
    <header className="haederLayout text-gray-600 body-font">
      <Modal
        title="Authenticate"
        open={isLoginModalOpen}
        handleClose={handleCloseLoginModal}
      >
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          {loginSteps.map((step) => (
            <li
              key={step.id}
              class={`${
                step !== 3 &&
                "sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 "
              } flex md:w-full items-center text-blue-600 dark:text-blue-500`}
            >
              <span
                class={`${
                  step !== 3 &&
                  "flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
                }`}
              >
                {loginStep >= step.id ? (
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                ) : (
                  <span class="me-2">{step.id}</span>
                )}

                {step.title}
              </span>
            </li>
          ))}
        </ol>

        <div className="flex flex-col items-center justify-center h-80">
          <button
            type="button"
            onClick={
              loginStep === 1 ? handleConnectWalletClick : handleAnonAuthClick
            }
            className={`px-2 py-2 ${
              loginStep === 1
                ? "bg-white"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            } shadow-2xl rounded-xl md:w-1/4 w-full transform transition duration-5000 hover:scale-105`}
          >
            <span
              className={`text-sm font-bold ${
                loginStep === 1 ? "text-black" : "text-white"
              }`}
            >
              {loginStep === 1 ? "Connect your wallet with" : "Authenticate"}
            </span>
            {loginStep === 1 && <MetamaskLogo />}
          </button>
          {/* <LogInWithAnonAadhaar /> */}
        </div>
      </Modal>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={logo} width={200} alt="Logo" />
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {!isAuthenticated && (
            <button
              className="mr-5 hover:text-gray-900  border-[0.5px] border-gray-900 p-2 rounded-md transform shadow-lg hover:shadow-xl"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </button>
          )}
        </nav>
        {isAuthenticated && (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex flex-row items-center justify-between w-full border-[0.5px] rounded-full p-1">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white hover:shadow-xl"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <p className="text-ellipsis overflow-hidden w-40 px-4">
                  {address}
                </p>
              </Menu.Button>
            </div>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {profileLinks.map((link) => (
                    <Menu.Item key={link.id}>
                      <button
                        onClick={link.onClick}
                        className={
                          "text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                        }
                      >
                        {link.title}
                      </button>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </div>
    </header>
  );
};

export default Header;
