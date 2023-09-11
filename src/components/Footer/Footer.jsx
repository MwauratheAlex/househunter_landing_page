import React from "react";
import FooterCard from "./FooterCard";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="links">
        <FooterCard
          heading={"Product"}
          links={["Listings", "Property", "Agent", "Block"]}
        />
        <FooterCard
          heading={"Resources"}
          links={["Our Homes", "Member Stories", "Video"]}
        />
        <FooterCard
          heading={"Company"}
          links={["Patnerships", "Terms of use", "Privacy", "Sitemap"]}
        />

        <FooterCard
          heading={"Get in touch"}
          paragraph={"You’ll find your next home, in any style you prefer."}
        />
      </div>
      <div className="footnote">
        <h1>House Hunter.</h1>
        <p>Copyright mbumwa.com. All rights reserved. 2023</p>
      </div>
    </footer>
  );
}
