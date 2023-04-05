import React, { useEffect, useState } from "react";
const DateToday = () => {
  enum Days{
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',

  }
  
  let today = new Date();
  let [time, setTime] = useState(''+String(today.getHours()).padStart(2, "0")+':'+String(today.getMinutes()).padStart(2, "0"));
  useEffect(()=> {setInterval(()=>{
    today = new Date();
    let newTime = ''+String(today.getHours()).padStart(2, "0")+':'+String(today.getMinutes()).padStart(2,"0")
    setTime(newTime);
  },1000)}, [time])
  let date = `${today.getDate()}.${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}.${today.getFullYear()}`;
  return <div className="date"><p>Today is {date}, {Days[today.getDay()]}</p>
  <p>{time}</p></div>;
};

export default DateToday;
