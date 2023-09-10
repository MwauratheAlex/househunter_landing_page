import React from "react";
import arrow from "../assets/arrow2.svg";
import "../styles/link.css";

export default function Link({ text }) {
  return (
    <a className="link">
      {text}
      <img className="arrow-icon" src={arrow} alt="arrow pointing right" />
    </a>
  );
}
