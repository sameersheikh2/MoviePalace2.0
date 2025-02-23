const Header = () => {
  return (
    <header className="flex justify-between items-center h-24 shadow-md px-4 m-5 bg-white rounded-sm">
      <div className="flex flex-col mb-4 items-center justify-center cursor-pointer">
        <h1 className="tracking-widest text-4xl  font-semibold">MoviePalace</h1>
        <p className="text-xs tracking-widest">
          Where Every Frame Tells a Story
        </p>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-5">
          <li className="px-4 py-2 cursor-pointer border border-black rounded-4xl hover:bg-green-800 hover:text-white transition-all ease-out duration-300">
            Home
          </li>
          <li className="px-4 py-2 cursor-pointer border border-black rounded-4xl hover:bg-green-800 hover:text-white transition-all ease-out duration-300">
            Login
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
