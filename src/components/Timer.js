import React, { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function handleReset() {
    handleStop();
    setTime(0);
  }

  return (
    <div>
      <div>Timer: {time} seconds</div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
