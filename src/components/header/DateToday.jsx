import React from "react";
const DateToday = () => {
  let today = new Date();
  let date = `${today.getDate()}.${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}.${today.getFullYear()}`;
  return <div className="date">Today is {date}</div>;
};

export default DateToday;
