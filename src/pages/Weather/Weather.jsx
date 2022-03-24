import React from 'react'
import "./Weather.css";
import { time } from '../../common/datas/time';
import RainThunderFoto from '../../assets/images/weather/rain_thunder.png';
import { WeatherDatas } from '../../common/datas/WeatherDatas';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
function Weather() {
  return (
    <div className='weather'>
     <h1>Ob-havo ma’lumotlari</h1>
     <p>{time}</p>
     <div className="weather_gradus">
           <div className="gradus_info">
             <p>23 <span> &#186;</span></p>
             <div className="location">
               <h4>O'zbekiston</h4>
             </div>
           </div>
           <div className="weather_gradus_right">
             <img src={RainThunderFoto} alt="rain_thunder" />
           </div>
     </div>
     <div className="weather_infos">
      {WeatherDatas.map((item,index)=>(
        <WeatherInfo
         key={index} 
         image={item.image}
         day={item.day}
         gradus={item.gradus}
         />
      ))}
     </div>
      </div>
  )
}

export default Weather