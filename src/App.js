import ChildOne from "./components/ChildOne";
import { useState } from "react";

const App = () => {

  const [data, setdata] = useState([{ Name: "pooja" }, { Name: "nisha" }])

  return (
    <div className="App">
      <h1> I'm the parent</h1>
      <ChildOne data={data} />
    </div>
  );
};

export default App;
