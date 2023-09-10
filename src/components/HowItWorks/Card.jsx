import React from "react";
import Link from "../Link";

export default function Card({ icon, heading, cta }) {
  return (
    <div className="card">
      <img src={icon} />
      <h1>{heading}</h1>
      <Link text={cta} />
    </div>
  );
}
