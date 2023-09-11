import React from "react";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

export default function FooterCard({ heading, links, paragraph }) {
  return (
    <div>
      <h1>{heading}</h1>
      {links && (
        <ul>
          {links.map((link) => (
            <li>{link}</li>
          ))}
        </ul>
      )}
      {paragraph && <p>{paragraph}</p>}
      {paragraph && (
        <div className="socials">
          <a>
            <TiSocialTwitter size={30} fill="#000336" />
          </a>
          <a>
            <TiSocialInstagram size={30} fill="#000336" />
          </a>
          <a>
            <TiSocialLinkedin size={30} fill="#000336" />
          </a>
        </div>
      )}
    </div>
  );
}
