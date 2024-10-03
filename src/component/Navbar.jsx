import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col bg-green-400">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
