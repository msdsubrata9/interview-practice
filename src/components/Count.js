import React from "react";

function Count({ text, count }) {
  console.log("inside the salary text component");
  return (
    <div>
      <span>
        {text} - {count}
      </span>
    </div>
  );
}

export default React.memo(Count);
