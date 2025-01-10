import React from "react";

function Button(props) {
  const { handleClick, children } = props;
  console.log(`inside ${children} increment button component`);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
