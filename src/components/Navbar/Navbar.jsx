import React, { useEffect, useState } from "react";
import "../../styles/navbar.css";
import logo from "../../assets/logo.png";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

export default function Navbar({ onClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <li onClick={() => onClick("home")}>Home</li>
        <li onClick={() => onClick("how_it_works")}>How it works</li>
        <li onClick={() => onClick("featured")}>Featured Properties</li>
        <li onClick={() => onClick("newsletter")}>Newsletter</li>
        <li onClick={() => onClick("contact")}>Contact Us</li>
      </ul>
    </nav>
  );
}
