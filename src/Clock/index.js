import { useEffect, useState } from "react";
import "./style.css"

export const Clock = () => {

  const [newDate, setNewDate] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewDate(() => new Date());
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const myDate = newDate.toLocaleDateString(
    undefined,
    {
      month: "long", weekday: "long", day: "numeric", year: "numeric"
    },
  );

  const myTime = newDate.toLocaleTimeString();

  return (
    <p className="clock"> Dzisiaj jest {myDate}, {myTime}</p>
  );
}

