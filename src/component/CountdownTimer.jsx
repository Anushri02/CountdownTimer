import React, { useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const CountdownTimer = ({
  isPlaying,
  seconds,
  minutes,
  hours,
  resumeCountdown,pauseCountdown
}) => {
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="timer_container">
      <button onClick={!isPlaying ? resumeCountdown : pauseCountdown}>
        {!isPlaying ? <FaPlay /> : <FaPause />}
      </button>
      <h2 className="timer">{`${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`}</h2>
    </div>
  );
};

export default CountdownTimer;
