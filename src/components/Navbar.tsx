import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[50px] px-5 text-white bg-gray-500 items-center">
      <h3 className="font-bold italic">Store App</h3>
      <div>
        <Link to="/" className="mr-2">Home</Link>
        <Link to="/">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
