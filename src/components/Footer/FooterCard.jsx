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
            <li key={link}>{link}</li>
          ))}
        </ul>
      )}
      {paragraph && <p>{paragraph}</p>}
      {paragraph && (
        <div className="socials">
          <a>
            <TiSocialTwitter size={24} fill="#000336ce" />
          </a>
          <a>
            <TiSocialInstagram size={24} fill="#000336ce" />
          </a>
          <a>
            <TiSocialLinkedin size={24} fill="#000336ce" />
          </a>
        </div>
      )}
    </div>
  );
}
