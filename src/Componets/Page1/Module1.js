import React from 'react'
import Style from "./Style.module.css"

const Module1 = () => {
  return (
    <div className={Style.container} > 
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <li className={Style.last}><a href="#">Audacious-Technologies</a></li>
        <input type="search" placeholder='Search-Content' name="" id="" />
      </nav>
    </div>
  )
}

export default Module1
