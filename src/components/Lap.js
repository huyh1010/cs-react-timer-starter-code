import React from "react";

function Lap({ time, formatTime }) {
  return (
    <div className="laptime">
      <div className="laptime-time">{formatTime(time)}</div>
    </div>
  );
}

export default Lap;
