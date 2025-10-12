import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-white dark:bg-gray-900 shadow-md px-6 h-20 transition-colors">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>

          <div className="flex-1 flex items-center ml-5">
            <Link to="/" className="flex items-center">
              <div className="flex flex-col items-start cursor-pointer">
                <h1 className="tracking-widest text-2xl font-semibold text-gray-900 dark:text-white">
                  MoviePalace
                </h1>
                <p className="text-xs tracking-widest text-gray-600 dark:text-gray-300">
                  Where Every Frame Tells a Story
                </p>
              </div>
            </Link>

            <div className="ml-auto flex items-center gap-4">
              <ul className="hidden lg:flex menu menu-horizontal px-1 font-semibold items-center gap-2">
                <li>
                  <Link
                    to="/"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300"
                  >
                    Login
                  </Link>
                </li>
              </ul>

              <div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu flex justify-center items-center flex-col p-4 w-80 min-h-full dark:bg-base-200/90 text-4xl text-white bg-black/90 space-y-2">
          <li>
            <Link to="/" className="font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="font-semibold">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
