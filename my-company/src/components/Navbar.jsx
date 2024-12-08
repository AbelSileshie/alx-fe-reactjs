import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul
        style={{
          backgroundColor: "gray",
          justifyContent: "centrer",
          padding: "10px",
          display: "flex",
          listStyle: "none",
          textDecoration: "none",
          color: "black",
          gap: "10px",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
