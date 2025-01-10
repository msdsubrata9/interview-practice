import React from "react";
import useLocalStorage from "../utils/useLocalStorage";

function Storage() {
  const [inputValue, setInputValue] = useLocalStorage("text", "");
  return (
    <div>
      <div>
        <h1>Type here</h1>
        <input
          type="text"
          className="local-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Storage;
