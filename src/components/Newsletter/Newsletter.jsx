import React from "react";
import "../../styles/newsletter.css";
import phone from "../../assets/phone.svg";

export default function Newsletter() {
  return (
    <section className="newsletter container">
      <div className="newsletter-content">
        <h1>Subscribe to our Newsletter!</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <button>Subscribe</button>
      </div>
      <img src={phone} />
    </section>
  );
}
