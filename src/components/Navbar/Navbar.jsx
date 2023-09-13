import React, { useState } from "react";
import "../../styles/navbar.css";
import logo from "../../assets/logo.png";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className="container">
      <img src={logo} alt="house hunter logo" />
      <button className="menu-btn" onClick={toggleMenu}>
        <AiOutlineMenuFold
          size={26}
          className="menu-icon"
          fill="#000336"
          height={"100%"}
        />
      </button>

      <ul className={menuOpen ? "show" : "hidden"}>
        <button className="menu-btn close-btn" onClick={toggleMenu}>
          <AiOutlineClose
            className="close-icon"
            fill="rgba(255, 0, 0, 0.8)"
            size={26}
          />
        </button>
        <li>Home</li>
        <li>How it works</li>
        <li>Featured Properties</li>
        <li>Newsletter</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}
