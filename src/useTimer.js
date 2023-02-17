import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [timeList, setTimeList] = useState([]);

  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(null);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setTime(0);
    active.current.disabled = false;
    setTimeList([]);
  };

  const splitTimer = () => {
    timeList.push(time);
    setTimeList([...timeList]);
  };

  return [
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    timeList,
  ];
};
export default useTimer;
