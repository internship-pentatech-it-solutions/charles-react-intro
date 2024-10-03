import { useState } from "react";

import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <p className="text-blue-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
