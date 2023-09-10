import React from "react";
import arrow from "../../assets/arrow3.svg";
import "../../styles/stats.css";
import towerImage from "../../assets/tower.png";

export default function Stats() {
  const styles = {
    width: "100%",
    backgroundImage: `url(${towerImage})`, // Use the imported image
    /* Add other CSS properties as needed */
  };
  return (
    <section className="stats container">
      <div className="top-section">
        <div className="left">
          <div className="img">
            <img src={towerImage} />
          </div>
          <div className="stats-content">
            <h1>40,000+</h1>
            <img src={arrow} />
            <p>By avarage for 2 bedroom apments in San Francisco, CA</p>
          </div>
        </div>
        <div>
          <h1>You’ve found a neighborhood you love.</h1>
          <p>
            When you own a home, you’re committing to living in one location for
            a while. In a recent Trulia survey, we found that five out of six
            respondents said finding the right neighborhood{" "}
          </p>
        </div>
      </div>
      <div className="bottom-section">
        <div>
          <h1>2,500</h1>
          <p>Homes For Sale</p>
        </div>
        <div>
          <h1>5,000+</h1>
          <p>Homes Recently Sold</p>
        </div>
        <div>
          <h1>170+</h1>
          <p>Price Reduced</p>
        </div>
      </div>
    </section>
  );
}
