import { useEffect, useState } from "react";
import "./style.css"

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const formatDate = date.toLocaleString(
    undefined,
    {
      hour:"2-digit", 
      minute:"2-digit", 
      second:"2-digit", 
      weekday: "long", 
      day: "numeric", 
      month: "long", 
      year: "numeric"
    },
  );

  return (
    <div className="clock"> Dzisiaj jest{" "}{formatDate}</div>
  );
}

