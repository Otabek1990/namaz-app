import React,{useState,useEffect,useRef} from 'react'
import "./Main.css";
import Time from '../../components/Time/Time';
import NamazTimesList from '../../components/NamazTimesList/NamazTimesList';
import { time } from '../../common/datas/time';
import axios from "axios";
import { API_KEY } from '../../common/API/Api_Key';
function Main() {
  const [city, setCity] = useState("");
  const [shahar, setShahar] = useState("Tashkent");
  const [namazInfos, setNamozInfos] = useState([])

  const inputRef=useRef()
  useEffect(() => {
   axios.get(`https://muslimsalat.com/${shahar}.json?key=${API_KEY}`)
    .then(res=>res.data.items!==undefined ? setNamozInfos(res.data.items):alert("shaharni togri kiriting"))
    inputRef.current.focus();
}, [shahar])
const submitBtn=e=>{
  e.preventDefault();
  setShahar(city);
}
  return (
    <main>
      <div className="time_by_city">
      <h1>{namazInfos!==undefined ? shahar:"Toshkent"} shahri uchun namoz vaqti</h1>
      <form onSubmit={submitBtn}>
      <input type="text"
       value={city}
       ref={inputRef}
       onChange={e=>setCity(e.target.value)} 
       placeholder='shaharni kiriting'/>
      </form>
      </div>
      <p>{time}</p>
      <Time/>
      <NamazTimesList namazInfos={namazInfos}/>
    </main>
  )
}

export default Main