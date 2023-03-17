import React from 'react'
// import { Container } from 'react-bootstrap'
import banner from "../images/b.jpg"

export default function TopSection() {
  return (
    <div className="position-relative">
    <figure className="postion-relative">
    <img src={banner} alt="" className="lap" />
    </figure>
 <figcaption>
 <h1>Computer Engineering</h1>
 <p>142,765 Computer Engineers follow this</p>
 </figcaption>
    </div>
  )
}
