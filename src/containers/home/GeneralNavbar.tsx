import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/outline";

import clsx from "clsx";
import useAuth from "../../hooks/useAuth";

const navigation = [
  { name: "Accueil", href: "#", current: true },
  { name: "A propos de nous", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

export const GeneralNavar = () => {
  const { login } = useAuth();

  const DisclosurePanel = () => {
    return (
      <Disclosure.Panel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              className={clsx(
                "block px-3 py-2 rounded-md text-base font-medium",
                {
                  "bg-gray-100 text-gray-900": item.current,
                  "text-gray-900 hover:bg-gray-100": !item.current,
                }
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </button>
          ))}
          <button
            onDoubleClick={() => console.log("first")}
            onClick={() => {
              console.log("first");
              // login;
            }}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Se connecter
          </button>
        </div>
      </Disclosure.Panel>
    );
  };

  const NavigationElements = () => {
    return (
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              className={clsx(
                "px-3 py-2 rounded-md cursor-pointer text-sm font-medium",
                {
                  "bg-gray-100 text-gray-900": item.current,
                  "text-gray-900 hover:bg-gray-100": !item.current,
                }
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Disclosure
      as="nav"
      //className=" bg-gray-800"
      className="border border-b-1 bg-white"
    >
      {(isopen: any) => {
        return (
          <>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {isopen ? (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <NavigationElements />
              </div>

              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs"></div>
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <button onClick={login}> Se connecter</button>
                </div>
              </div>
            </div>

            <DisclosurePanel />
          </>
        );
      }}
    </Disclosure>
  );
};
