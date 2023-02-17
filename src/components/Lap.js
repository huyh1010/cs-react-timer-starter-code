import React from "react";

function Lap(lap, time, formatTime) {
  return (
    <div className="laptime">
      <div className="laptime-lap">{lap}</div>
      <div className="laptime-time">{formatTime(time)}</div>
    </div>
  );
}

export default Lap;
