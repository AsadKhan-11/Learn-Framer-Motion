import { useState } from "react";
import "./App.css";
import Basics from "./Components/Basics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Basics />
    </>
  );
}

export default App;
