import React from "react";

export default function CTA({ onClick }) {
  return (
    <section className="cta">
      <h2>Welcome to House Hunter</h2>
      <h1>Discover a place you'll love to live.</h1>
      <p>
        get the best real estate deals first, before they hit the mass market!
        HOT FORECLOSURE DEALS with one simple search.
      </p>

      <div className="links">
        <a href="https://househunter.mbumwa.com" target="_">
          Visit house hunter
        </a>
        <a onClick={() => onClick("contact")}>Contact us</a>
      </div>
    </section>
  );
}
