import React,{useState,useEffect} from "react";
import "./NamazTimesList.css";
import NamazTime from "../NamazTime/NamazTime";
import Bomdod from '../../assets/images/Namaz-times/bomdod.png';
import Sunrise from '../../assets/images/Namaz-times/sunrise.png';
import Peshin from '../../assets/images/Namaz-times/peshin.png';
import Asr from '../../assets/images/Namaz-times/asr.png';
import Shom from '../../assets/images/Namaz-times/shom.png';
import Xufton from '../../assets/images/Namaz-times/hufton.png';



function NamazTimes({namazInfos}) {
  const [namazTimeDatas, setNamazTimeDatas] = useState([])
  console.log(namazInfos)
  useEffect(() => {
    setNamazTimeDatas([
       {image:Bomdod,title:"Bomdod",time:namazInfos.length>0 ? namazInfos[0].fajr:"05:37"},
       {image:Sunrise,title:"Quyosh",time:namazInfos.length>0 ? namazInfos[0].shurooq:"05:37"},
       {image:Peshin,title:"Peshin",time:namazInfos.length>0 ? namazInfos[0].dhuhr:"05:37"},
       {image:Asr,title:"Asr",time:namazInfos.length>0 ? namazInfos[0].asr:"05:37"},
       {image:Shom,title:"Shom",time:namazInfos.length>0 ? namazInfos[0].maghrib:"05:37"},
       {image:Xufton,title:"Xufton",time:namazInfos.length>0 ? namazInfos[0].isha:"05:37"},
   ])
 
  }, [namazInfos])
  

  return (
    <div className="namaz_times">
      <h3>Sha'bon oyi</h3>
      <div className="namaz_times_list">
        {namazTimeDatas.map((item, index) => (
          <NamazTime
            key={index}
            image={item.image}
            title={item.title}
            time={item.time}
            namazInfos={namazInfos}
          />
        ))}
      </div>
    </div>
  );
}

export default NamazTimes;
