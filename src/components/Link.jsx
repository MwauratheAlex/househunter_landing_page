import React from "react";
import arrow from "../assets/arrow2.svg";
import "../styles/link.css";

export default function Link({ text, dest, target }) {
  return (
    <a className="link" href={dest} target={target}>
      {text}
      <img className="arrow-icon" src={arrow} alt="arrow pointing right" />
    </a>
  );
}
