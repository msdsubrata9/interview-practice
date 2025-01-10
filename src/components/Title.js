import React from "react";

function Title({ text, count }) {
  console.log("inside age increment component");
  return (
    <div>
      <span>
        {text} - {count}
      </span>
    </div>
  );
}

export default React.memo(Title);
