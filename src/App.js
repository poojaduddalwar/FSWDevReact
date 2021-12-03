import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";

import Navbar from "./layouts/Navbar";
import Info from "./components/Info";
import Timer from "./components/Timer";
import Tap from "./components/Tap";

const App = () => {
  // const currentComp = "tap";
  const [currentComp, setcurrentComp] = useState('info')


  return (
    <div className="App">
      <Navbar setcurrentComp={setcurrentComp} />
      {
        currentComp === "calculator" ? <Calculator />
          : currentComp === "timer" ? <Timer />
            : currentComp === "tap" ? <Tap />
              : <Info />
      }
      {/* <Info />
      <Timer />
      <Calculator />
      <Tap /> */}
    </div>
  );
};

export default App;

// in return when you are returning something in curly brackets you can only use expressions you can't use a block ..... so using if else it would create a new block which is not allowed
//so here instead of using if else we use ternary operator

// react cannot track the change of the variables it can only track the changes on its props or state
