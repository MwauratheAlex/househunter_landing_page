import React from "react";
import "../../styles/header.css";
import CTA from "./CTA";
import house from "../../assets/house_illustration.svg";
import arrow from "../../assets/arrow.svg";

export default function Header({ onClick }) {
  return (
    <header className="container">
      <CTA onClick={onClick} />
      <div className="main-imgs">
        <img
          className="header-arrow"
          src={arrow}
          alt="arrow pointing to a house"
        />
        <section className="img">
          <img src={house} alt="a house" />
        </section>
      </div>
    </header>
  );
}
