import React from 'react'
import "../../styles/header.css"
import CTA from './CTA'
import house from "../../assets/house_illustration.svg"
import arrow from "../../assets/arrow.svg"

export default function Header() {
  return (
    <header className='container'>
      <CTA />
      <img src={arrow} alt='arrow pointing to a house'/>
      <section className='img'>
        <img src={house} alt='a house'/>
      </section>
    </header>
  )
}
