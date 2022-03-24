import React from 'react'
import "./NamazTime.css"
function NamazTime({image,title,time,namazInfos}) {
  return (
    <div className='namaz_time'>
        <img src={image} alt={title} />
        <p>{title}</p>
        <span>{time}</span>

    </div>
  )
}

export default NamazTime