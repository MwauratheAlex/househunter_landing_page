import React from "react";
import { IoMdBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { TbZoomInArea } from "react-icons/tb";

export default function PropertyCard({ heading, imgSrc, desc, data }) {
  return (
    <div className="property-card">
      <img src={imgSrc} />
      <div className="content">
        <h1>{heading}</h1>
        <p>{desc}</p>
        <div className="amenities">
          <div className="cont">
            <IoMdBed size={32} fill="#0C8BFF" />
            <p>{data.beds} beds</p>
          </div>
          <div className="cont">
            <FaBath size={20} fill="#0C8BFF" />
            <p>{data.baths} baths</p>
          </div>
          <div className="cont">
            <TbZoomInArea size={24} fill="#0C8BFF" />
            <p>{data.area} sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
}
