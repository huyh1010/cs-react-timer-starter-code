import React from "react";
import { formatTime } from "../formatTime";
import Lap from "./Lap";

function LapList({ timeList }) {
  console.log(timeList);
  return (
    <div className="laplist-wrapper">
      <div className="laplist-headers">
        <span className="laplist-title">RECORD</span>
      </div>
      <ul className="laplist-list">
        {timeList.map((time, index) => {
          return (
            <li key={index}>
              <Lap time={time} formatTime={formatTime} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LapList;
