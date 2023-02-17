export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return (
    <div className="time-card-wrapper">
      <div className="time-card time-hours">{getHours}</div>
      <div className="time-card time-minutes">{getMinutes}</div>
      <div className="time-card time-seconds">{getSeconds}</div>
    </div>
  );

  // `${getHours} : ${getMinutes} : ${getSeconds}`;
};
