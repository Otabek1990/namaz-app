import React from "react";
import "./Time.css";
import TimeCircleLeft from "../../assets/images/timeCircleLeft.png";
import TimeCircleRight from "../../assets/images/timeCircleRight.png";
function Time() {

    const today=new Date();
     const hour=today.getHours();
     const minute=today.getMinutes();
  
  return (
    <div className="time">
      <img className="circle_left_img" src={TimeCircleLeft} alt="circle_left" />
      <img
        className="circle_right_img"
        src={TimeCircleRight}
        alt="circle_right"
      />
      <div className="namoz_time">
        <p>Namoz vaqti</p>
        <div className="show_time">
          <div className="hour">
            <h1>{hour}</h1>
            <span>soat</span>
          </div>
          <div className="minute">
            <h1>{minute}</h1>
            <span>daqiqa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
