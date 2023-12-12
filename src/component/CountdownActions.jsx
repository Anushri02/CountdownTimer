import React from "react";

const CountdownActions = ({ startCountdown, resetCountdown }) => {
  return (
    <div className="actions">
      <button onClick={startCountdown}>Start</button>
      <button onClick={resetCountdown}>Reset</button>
    </div>
  );
};

export default CountdownActions;