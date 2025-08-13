import Click from "./Click.jsx";
import { useState } from "react";
import IsEven from "./IsEven.jsx";
import IsEvenSpecial from "./IsEvenSpecial.jsx";

function StateComponent() {
  const [click, setClick] = useState(0);
  return (
    <>
      <Click clicks={click} setClicks={setClick}></Click>
      <IsEven numberValue={click}></IsEven>
    </>
  );
}

export default StateComponent;
