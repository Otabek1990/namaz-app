import React from 'react'
import "./WeatherInfo.css"
function WeatherInfo({image,day,gradus}) {
  return (
    <div className='weather_info'>
        <img src={image} alt={day} />
        <p className='gradus'>{gradus} <span> &#186;</span></p>  
        <p className='day'>{day}</p>
    </div>
  )
}

export default WeatherInfo