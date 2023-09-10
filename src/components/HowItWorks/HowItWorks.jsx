import React from 'react'
import Card from './Card'
import "../../styles/how_it_works.css"
import cartIcon from "../../assets/icon1.svg"
import toLetIcon from "../../assets/icon2.svg"
import sellHseIcon from "../../assets/icon3.svg"

export default function HowItWorks() {
  return (
    <section className='howItWorks'>
      <h2>How it works?</h2>
      <p>
        Everything you need to know when you're looking to buy,
        rent, or sell - all in one place.
      </p>
      <div className='cards'>
        <Card icon={cartIcon} heading={"Buyer Guides"} cta={"How to buy"}/>
        <Card icon={toLetIcon} heading={"Renter Guides"} cta={"How to rent"}/>
        <Card icon={sellHseIcon} heading={"Seller Guides"} cta={"How to sell"}/>
      </div>
      <button className='btn'>See Full Guidelines</button>
    </section>
  )
}
