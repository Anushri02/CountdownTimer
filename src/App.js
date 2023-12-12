import React, { useState, useEffect } from "react";
import CountdownForm from "./component/CountdownForm";
import CountdownTimer from "./component/CountdownTimer";
import CountdownActions from "./component/CountdownActions";

const App = () => {
  const [input, setInput] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      setError("Please enter numbers only");
      setIsPlaying(false);
      setRemainingTime(0);
    } else {
      setError("");
    }
    setInput(value);
  };

  useEffect(() => {
    let countdown;

    if (isPlaying) {
      countdown = setInterval(() => {
        if (seconds === 0 && minutes === 0 && hours === 0) {
          clearInterval(countdown);
          resetCountdown();
        } else if (seconds === 0 && minutes === 0 && hours > 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0 && minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [isPlaying, minutes, seconds]);

  useEffect(() => {
    if (isPlaying || remainingTime > 0) {
      setIsPlaying(false);
      setRemainingTime(0);
      resetCountdown();
    }
  }, [input]);

  const resetCountdown = () => {
    setIsPlaying(false);
    setRemainingTime(0);
    setInput("");
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setError("");
  };

  const pauseCountdown = () => {
    setIsPlaying(false);
    setRemainingTime(hours * 3600 + minutes * 60 + seconds);
  };

  const startCountdown = () => {
    if (input.length > 0) {
      setIsPlaying(true);
      setHours(Math.floor(input / 60));
      setMinutes(input % 60);
      setSeconds(0);
      setRemainingTime(0);
    }
  };

  const resumeCountdown = () => {
    if (!isPlaying && remainingTime > 0) {
      setIsPlaying(true);
    }
  };

  return (
    <div className="main_container">
      <CountdownForm
        input={input}
        handleInputChange={handleInputChange}
        error={error}
      />
      <CountdownTimer
        isPlaying={isPlaying}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        resumeCountdown={resumeCountdown}
        pauseCountdown={pauseCountdown}
      />
      <CountdownActions
        startCountdown={startCountdown}
        resetCountdown={resetCountdown}
      />
    </div>
  );
};

export default App;
