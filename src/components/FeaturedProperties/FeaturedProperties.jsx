import React from "react";
import Link from "../Link";
import PropertyCard from "./PropertyCard";
import "../../styles/features_properties.css";
import house1 from "../../assets/house1.jpeg";
import house2 from "../../assets/house2.jpeg";
import house3 from "../../assets/house3.jpeg";

export default function FeaturedProperties() {
  const listings = [
    {
      title: "Nikko Apartments",
      imgSrc: house1,
      desc: "8502 Preston Rd. Inglewood, Maine 98280",
      amenities: { beds: 5, baths: 2, area: 2000 },
    },

    {
      title: "CouCou Homestead",
      imgSrc: house2,
      desc: "8502 Preston Rd. Inglewood, Maine 98280",
      amenities: { beds: 5, baths: 2, area: 2000 },
    },

    {
      title: "Lavis 18 Residence",
      imgSrc: house1,
      desc: "8502 Preston Rd. Inglewood, Maine 98280",
      amenities: { beds: 5, baths: 2, area: 2000 },
    },
  ];

  return (
    <section className="featured container">
      <h1>Featured Properties</h1>
      <div className="featured-cta">
        <p>Everything you need to know when you're looking</p>
        <Link text="View All Properties" />
      </div>
      <div className="card-container">
        {listings.map((listing) => (
          <PropertyCard
            heading={listing.title}
            imgSrc={listing.imgSrc}
            desc={listing.desc}
            data={listing.amenities}
          />
        ))}
      </div>
    </section>
  );
}
