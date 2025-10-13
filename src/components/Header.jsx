import { Link, useLocation } from "react-router";
import { AnimatedThemeToggler } from "../../components/ui/animated-theme-toggler";
import SearchBar from "./SearchBar";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="drawer z-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-white dark:bg-gray-900 shadow-md px-4 flex-col lg:flex-row lg:h-20 w-full">
          <div className="flex items-center w-full justify-between lg:hidden gap-2 py-2">
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
            <Link to="/" className="flex flex-col items-center flex-1">
              <h1 className="tracking-widest text-2xl font-semibold text-gray-900 dark:text-white">
                MoviePalace
              </h1>
            </Link>
            <div className="flex items-center">
              <AnimatedThemeToggler />
            </div>
          </div>
          <div className="w-full block lg:hidden px-1 mb-2">
            {pathname !== "/login" && pathname !== "/signup" && <SearchBar />}
          </div>
          <div className="hidden lg:flex flex-1 flex-row  items-center ml-5 w-full h-20">
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
            <div className="w-full lg:w-[500px] lg:mx-10 mt-0 order-2 lg:order-none z-30">
              {pathname !== "/login" && pathname !== "/signup" && <SearchBar />}
            </div>
            <div className="ml-auto flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-end mt-0">
              <ul className="flex flex-row menu px-1 font-semibold items-center gap-2 w-full lg:w-auto">
                <li className="w-full lg:w-auto">
                  <Link
                    to="/"
                    className="w-full lg:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300 text-center"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`w-full lg:w-auto ${
                    pathname == "/login" ? "hidden" : ""
                  }`}
                >
                  <Link
                    to="/login"
                    className="w-full lg:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300 text-center"
                  >
                    Log In
                  </Link>
                </li>
                <li
                  className={`w-full lg:w-auto ${
                    pathname == "/signup" ? "hidden" : ""
                  } rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300 text-center`}
                >
                  <Link to="/signup" className="font-semibold w-full lg:w-auto">
                    Sign Up
                  </Link>
                </li>
              </ul>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                <AnimatedThemeToggler />
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
            <Link to="/" className="font-semibold ">
              Home
            </Link>
          </li>
          <li className={`${pathname == "/login" && "hidden"}`}>
            <Link to="/login" className="font-semibold">
              Log In
            </Link>
          </li>
          <li className={`${pathname == "/signup" && "hidden"}`}>
            <Link to="/signup" className="font-semibold">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
