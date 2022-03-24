const weekDays=["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]
const today=new Date();
const date=today.getDate();
const day=weekDays[today.getDay()];
const month=today.getMonth()+1;
let oy=month>9 ? month :`0${month}`
const year=today.getFullYear();

export const time=`${date}.${oy}.${year} - ${day}`
