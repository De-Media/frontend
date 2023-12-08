import React from "react";
import logo from "../../assets/images/full-logo.png";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const onLogout = () => {
    console.log("Logout called");
  };

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} width={200} alt="Logo" />
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link class="mr-5 hover:text-gray-900">First Link</Link>
          <Link class="mr-5 hover:text-gray-900">Second Link</Link>
          <Link class="mr-5 hover:text-gray-900">Third Link</Link>
          <Link class="mr-5 hover:text-gray-900">Fourth Link</Link>
        </nav>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
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
                <Menu.Item>
                  <a
                    href="/profile"
                    className={"text-gray-700 block px-4 py-2 text-sm"}
                  >
                    Profile
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={onLogout}
                    className={
                      "text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    }
                  >
                    Sign out
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
