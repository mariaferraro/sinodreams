import { useState } from 'react';

function Toggle() {
const [toggleState, setToggleState] = useState(1);

const toggleTab = (i) => {
  setToggleState(i);
  console.log(toggleState);
}
}

export default Toggle;