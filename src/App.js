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
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
          <LapList timeList={timeList} />
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
          <button className="button" onClick={() => splitTimer(timeList)}>
            Split
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
