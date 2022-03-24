import React,{useState} from 'react';
import "./Tasbeh.css";
function Tasbeh() {
  const [zikrCount, setzikrCount] = useState(0)
  const addBtn=e=>{
    e.preventDefault();
    setzikrCount(p=>p+1)
  }
  const clean=()=>{
    setzikrCount(0)
  }
  return (
    <div className='tasbeh'>
      <h1>Tasbeh</h1>
      <p>Subhanalloh</p>
      <div>
      <div className="zikr_count">
        <p>{zikrCount}</p>
      </div>
      <div className="clean">
        <input type="radio" />
        <label htmlFor="" onClick={clean}>Tozalash</label>
      </div>
        
      </div>
      <button onClick={addBtn}>Sanash</button>
      </div>
  )
}

export default Tasbeh