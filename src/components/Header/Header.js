import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/full-logo.png";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
	const navigate = useNavigate();


  const { signOut, isAuthenticated } = useAuth();

  const [address, setaddress] = useState(null);

  useEffect(() => {
    setaddress(sessionStorage.getItem("wallet-address"));
  }, [isAuthenticated]);

	const handleOpenProfilePage = () => {
		navigate('/profile');
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

  const handleInteract = () => {
    if (typeof window.ethereum !== "undefined") {
      handleConnectWallet();
    }
  };

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
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} width={200} alt="Logo" />
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {!isAuthenticated && (
            <button
              className="mr-5 hover:text-gray-900  border-[0.5px] border-gray-900 p-2 rounded-md transform shadow-lg hover:shadow-xl"
              onClick={handleInteract}
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
