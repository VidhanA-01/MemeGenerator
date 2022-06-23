import React from "react";
import Image from "../images/Troll Face.png";
export default function Navbar(){
  return(
    <div className="Navbar">
      <img src={Image} alt="" className="title-logo"/>
      <h2>Meme Generator</h2>
      <h3 className="desc">
       React Course Project-3
      </h3>
    </div>
  )
}