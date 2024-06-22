import React from "react"
import Image from "./Image"
// import Details from "./Details"

function Card({title, text, imageURL, date}){
    return(
      <div className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Image data={imageURL} date={date}/>
      </div>
    )
  }

  export default Card