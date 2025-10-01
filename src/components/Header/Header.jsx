import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <h2>I am Header</h2>
      <nav className="">
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/">Home</Link>
      </nav>2020
    </div>
  );
};

export default Header;
