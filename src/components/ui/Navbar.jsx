import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";
import { ImProfile } from "react-icons/im";
import { Settings, User2Icon, UserCheckIcon } from "lucide-react";
import { GrDashboard } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [responsiveDropdown, setResponsiveDropdown] = useState(false);

  const theme = useTheme();
  const { toggleTheme } = theme;

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme.theme);
    localStorage.setItem("theme", theme.theme);
  }, [theme]);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleResponsiveDropdown = () => {
    setResponsiveDropdown(!responsiveDropdown);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleResponsiveDropdown}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <Link to={"/"} className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Company Name
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3 gap-10">
                <button
                  onClick={toggleTheme}
                  className="block text-xl py-2 px-3 mt-1 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded md:hover:bg-transparent md:p-0"
                >
                  {theme.theme === "dark" ? (
                    <FaSun className="text-yellow-500" />
                  ) : (
                    <FaMoon />
                  )}
                </button>

                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50"
                      id="dropdown-user"
                    >
                      <div className="px-4 py-3">
                        <p className="text-sm text-gray-900 dark:text-white">
                          User{" "}
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                          example@gmail.com
                        </p>
                      </div>
                      <ul className="py-1">
                        <li>
                          <Link
                            to="/dashboard"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/settings"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={"/login"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/signup"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Signup
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 ${
          responsiveDropdown ? "-translate-x-full" : "translate-x-0"
        } dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/dashboard"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdDashboard />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/user"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <User2Icon />
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/settings"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Settings />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
