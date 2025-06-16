import { useState } from "react";
import "./App.css";
import Basics from "./Components/Basics";
import UseScroll from "./Components/UseScroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Basics /> */}
      <UseScroll />
    </>
  );
}

export default App;
