import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="  flex gap-[50px] pb-[50px] " >
        <Link to="/">Home</Link>
        <Link to="/first">Option one</Link>
        <Link to="/one">Option two</Link>
      </div>
    </>
  );
};

export default Navbar;
