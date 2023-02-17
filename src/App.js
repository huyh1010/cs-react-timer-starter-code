import LapList from "./components/LapList";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const [
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    timeList,
  ] = useTimer(0);

  console.log(timeList);

  return (
    <div className="App container">
      <h1>TIMER</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="time-units">
          <div className="unit unit-hours">HOURS</div>
          <div className="unit unit-minutes">MINUTES</div>
          <div className="unit unit-seconds">SECONDS</div>
        </div>
      </div>
      <div className="button__wrapper">
        <button className="button" onClick={stopTimer}>
          Stop
        </button>
        <button className="button" ref={active} onClick={startTimer}>
          Start
        </button>
        <button className="button" onClick={resetTimer}>
          Reset
        </button>
        <button className="button" onClick={splitTimer}>
          Split
        </button>
      </div>
      <div className="laplist">
        <LapList timeList={timeList} />
      </div>
    </div>
  );
}

export default App;
